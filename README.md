# Dependencies
+ Node.js
## Production
+ forever
## Development
+ gulp

# Install
1. git clone
2. npm install
3. cp config.template.js config.js
4. nano config.js
## Production
1. ln node_modules/jquery/dist/jquery.min.js public/build/jquery.min.js
2. ln node_modules/react/dist/react.min.js public/build/react.min.js
3. ln node_modules/react-dom/dist/react.min.js public/build/react-dom.min.js
4. ln node_modules/react-router/umd/ReactRouter.min.js public/build/ReactRouter.min.js
## Development
1. ln node_modules/jquery/dist/jquery.js public/build/jquery.js
2. ln node_modules/react/dist/react.js public/build/react.js
3. ln node_modules/react-dom/dist/react.js public/build/react-dom.js
4. ln node_modules/react-router/umd/ReactRouter.js public/build/ReactRouter.js

# Start
## Development
1. gulp
