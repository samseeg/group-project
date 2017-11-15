CREATE TABLE IF NOT EXISTS timecard (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    clock_in TEXT,
    clock_out TEXT,
    total_hours INTEGER
)

