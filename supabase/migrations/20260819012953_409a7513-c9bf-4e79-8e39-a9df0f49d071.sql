drop policy if exists "Anyone can upload property images" on storage.objects;
drop policy if exists "Public read property images" on storage.objects;

create policy "Upload property images (images only)"
on storage.objects for insert to anon, authenticated
with check (
  bucket_id = 'property-images'
  and lower(storage.extension(name)) in ('jpg','jpeg','png','webp','gif','heic','heif','avif')
  and array_length(storage.foldername(name), 1) = 1
);

create policy "Read property images via signed urls"
on storage.objects for select to anon, authenticated
using (bucket_id = 'property-images');