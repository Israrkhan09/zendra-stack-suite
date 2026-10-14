CREATE TABLE public.consultation_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) <= 255),
 phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
 company text NOT NULL DEFAULT '' CHECK (char_length(company) <= 150),
 service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
 message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 3000),
 source text NOT NULL CHECK (source IN ('quote', 'consultation')),
 project text NOT NULL DEFAULT '' CHECK (char_length(project) <= 150)
);
GRANT ALL ON public.consultation_requests TO service_role;
REVOKE ALL ON public.consultation_requests FROM anon, authenticated;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;