### Question 2: Implementing Authentication and Authorization in a RESTful API

**Topics Covered**: Authentication, Authorization, JWT (JSON Web Tokens), TypeScript, Express.js, Security, Middleware

**Question**:

Extend the RESTful API you previously created for the social media platform to include authentication and authorization. Implement user login functionality and protect certain endpoints so that only authenticated users can create, update, and delete tweets.

1. **POST /login**: Authenticate a user and return a JWT token.
2. Protect the following endpoints so that only authenticated users can access them:
    - **POST /tweets**
    - **PUT /tweets/:id**
    - **DELETE /tweets/:id**

**Requirements**:

-   Use JSON Web Tokens (JWT) for user authentication.
-   Implement a middleware to check for valid JWTs and restrict access to protected endpoints.
-   Return appropriate error responses for unauthorized access (e.g., 401 Unauthorized).
-   Use TypeScript for type safety in your server code.

**Bonus**:

-   Implement role-based access control (RBAC) to allow certain actions only for users with specific roles (e.g., admin can delete any tweet, while a regular user can only delete their own tweets).

**Example**:

-   Your `server.ts` file should include the necessary routes and middleware for authentication and authorization.

**Additionally**:

Update your React component to handle authentication. Add a login form and ensure that the JWT token is stored and used in subsequent API requests.

**Client-side Requirements**:

-   Use React to create a login form.
-   Store the JWT token securely (e.g., in local storage).
-   Modify the existing component to include the token in the Authorization header when making requests to protected endpoints.

**Example**:

-   Your `LoginForm.tsx` file should define the React component for user login.
-   Update `TweetList.tsx` to include the JWT token in the headers of protected requests.

---

This question covers implementing secure authentication and authorization using JWTs, handling user roles, and integrating authentication on the frontend with React.
