import OpenAI from 'openai';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/api/submit', async (req, res) => {
  const { feeling, genres, attendance, streaming } = req.body;
  console.log('Form submitted:', { feeling, genres, attendance, streaming });

  const isMissing = (v) => !Array.isArray(v) || v.length === 0;
  if ([feeling, genres, attendance, streaming].some(isMissing)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const prompt = `A user filled out a movie recommendation form:

Feeling: ${feeling.join(', ')}
Genres: ${genres.join(', ')}
Attendance: ${attendance.join(', ')}
Streaming services: ${streaming.join(', ')}

Recommend 3 movies based on these preferences.`;

  try {
    const response = await openai.responses.create({
      model: 'gpt-4o-mini',
      instructions:
        "You are a movie recommendation assistant. Recommend 3 movies that fit the user's preferences. For each, give the title, the year it was released, and the streaming platform it is on (preferably one the user listed).",
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'movie_recommendations',
          strict: true,
          schema: {
            type: 'object',
            properties: {
              recommendations: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                    year: { type: 'string' },
                    platform: { type: 'string' },
                  },
                  required: ['title', 'year', 'platform'],
                  additionalProperties: false,
                },
              },
            },
            required: ['recommendations'],
            additionalProperties: false,
          },
        },
      },
    });

    const parsed = JSON.parse(response.output_text);

    const recommendations = await Promise.all(
      parsed.recommendations.map(async (rec) => {
        const params = new URLSearchParams({
          query: rec.title,
          primary_release_year: rec.year,
        });

        try {
          const r = await fetch(`https://api.themoviedb.org/3/search/movie?${params}`, {
            headers: {
              Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
              accept: 'application/json',
            },
          });

          if (!r.ok) throw new Error(`TMDB ${r.status}`);

          const data = await r.json();
          const match = data.results[0];

          return {
            ...rec,
            tmdbId: match?.id ?? null,
            posterUrl: match?.poster_path
              ? `https://image.tmdb.org/t/p/w500${match.poster_path}`
              : null,
            overview: match?.overview ?? null,
            releaseDate: match?.release_date ?? null,
          };
        } catch (err) {
          return { ...rec, tmdbId: null, error: err.message };
        }
      })
    );

    console.log(recommendations);
    res.json({ recommendations });
  } catch (err) {
    console.error('Error generating recommendations:', err);
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});