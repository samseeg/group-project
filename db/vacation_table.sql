CREATE TABLE IF NOT EXISTS vacation (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    start_date TEXT,
    end_date TEXT,
    approval TEXT
)