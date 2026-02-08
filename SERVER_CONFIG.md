# Server Deployment Configuration

## Apache (.htaccess)
The included `.htaccess` file handles:
- Angular Router fallback to index.html
- GZIP compression
- Cache headers for static assets

## Nginx
For Nginx servers, add this configuration to your server block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}

# Enable GZIP compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

# Cache static assets
location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

## Node.js/Express
For Node.js servers:

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 4200);
```

## Build for Production
```bash
ng build --configuration production
```

The built files will be in the `dist/` folder and ready for server deployment.