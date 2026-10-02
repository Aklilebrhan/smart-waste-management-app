# Matching rules

Providers must be available, have remaining capacity at least equal to the requested estimated weight, and fall inside their service radius. Eligible providers are ranked primarily by distance and then by rating. Production deployment should use PostGIS `ST_DWithin` to filter candidates and row-level locking/unique request-job relationships to make the first acceptance authoritative.
