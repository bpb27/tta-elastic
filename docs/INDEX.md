### Generating a new index
1. Go to https://dashboard.searchly.com/80236/indices
2. Click new index
3. In `scripts/generate-elastic-search-mapper/index.js`, change the index name to your new index
4. Run the script
5. In `scripts/pull-latest-dataset-from-tta/upload.js`, change the index name to your new index
6. Run the script
