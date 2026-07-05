
/*
# Create events table

Single-tenant event creation for the Clutch app (no authentication required).

## New Tables

### `events`
Stores all events created through the Create Event form.

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key, auto-generated |
| title | text | Name of the event (required) |
| timezone | text | Event timezone |
| start_time | text | Start time string (e.g. "09:00 am") |
| start_date | text | Start date string |
| end_time | text | End time string |
| end_date | text | End date string |
| location | text | Event location/venue |
| description | text | Event description |
| ticket_price | integer | Ticket price in units |
| team_members | integer | Max team members allowed |
| theme_color | text | Hex color for event theme |
| cover_image_url | text | URL of uploaded cover image |
| created_at | timestamptz | Row creation timestamp |

## Security

- RLS enabled.
- No auth — all policies use `TO anon, authenticated` with `USING (true)` / `WITH CHECK (true)`.
  Public shared data: anyone with the anon key can read and write events.
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  timezone text,
  start_time text,
  start_date text,
  end_time text,
  end_date text,
  location text,
  description text,
  ticket_price integer DEFAULT 5,
  team_members integer DEFAULT 5,
  theme_color text DEFAULT '#C26B6B',
  cover_image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_events" ON events;
CREATE POLICY "anon_select_events" ON events FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_events" ON events;
CREATE POLICY "anon_insert_events" ON events FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_events" ON events;
CREATE POLICY "anon_update_events" ON events FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_events" ON events;
CREATE POLICY "anon_delete_events" ON events FOR DELETE
  TO anon, authenticated USING (true);
