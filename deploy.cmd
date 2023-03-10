aws s3 sync build s3://bebo-frontend
aws cloudfront create-invalidation --distribution-id "EVWLZRJHBHZ0E" --paths "/*" --no-cli-pager
