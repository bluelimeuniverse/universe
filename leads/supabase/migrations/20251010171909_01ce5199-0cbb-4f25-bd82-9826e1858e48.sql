-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create a cron job that runs every minute to process the search queue
SELECT cron.schedule(
  'process-search-queue-job',
  '* * * * *', -- Every minute
  $$
  SELECT
    net.http_post(
        url:='https://vpselawcoxswncpixrno.supabase.co/functions/v1/process-search-queue',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwc2VsYXdjb3hzd25jcGl4cm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MDQ1MzQsImV4cCI6MjA4MDE4MDUzNH0.35YLqyuiIGvHI040EKLAwYrlUtyNaHFx-hRlQig1Qwg"}'::jsonb,
        body:='{}'::jsonb
    ) as request_id;
  $$
);