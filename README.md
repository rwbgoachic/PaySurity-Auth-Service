# PaySurity-Auth-Service

Authentication service for PaySurity. Handles user registration, login, and JWT issuance.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file:
   ```
   PORT=4500
   JWT_SECRET=your_jwt_secret
   ```

3. Run in development:
   ```
   npm run dev
   ```

4. Build & Run in production:
   ```
   npm run build
   npm start
   ```

## Endpoints

- `GET /api/health` - Health check.
- `POST /api/register` - Register a new user. Expects `{ username, password }`.
- `POST /api/login` - Log in. Expects `{ username, password }`.
