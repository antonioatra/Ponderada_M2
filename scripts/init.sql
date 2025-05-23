  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL,
    birthdate DATE NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);
INSERT INTO categories (title) VALUES
('Estudo'),
('Exercício'),
('Trabalho'),
('Lazer');

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    category_id INT REFERENCES categories(id),
    duration_hours INT,
    day_activ DATE,
    description TEXT
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE priorities (
    id SERIAL PRIMARY KEY,
    label TEXT,
    color TEXT
);

INSERT INTO priorities (label, color) VALUES 
('ALTA', '#FF0000'),
('MEDIA','#FFFF00'),
('BAIXA','#00FF00');

CREATE TABLE task_priority (
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    priority_id INT REFERENCES priorities(id),
);

CREATE TABLE reminders (
    id SERIAL PRIMARY KEY,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
    remind_at TIMESTAMP,
    sent BOOLEAN
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE task_tags (
  task_id INT REFERENCES tasks(id) ON DELETE CASCADE,
  tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (task_id, tag_id)
);


