# Backend Restaurant

This project is a backend server developed using TypeScript and run using `ts-node` for development and `node` for production.

### Technologies Used

- **Node.js**: v14.x or newer
- **TypeScript**: ^5.4.5
- **ts-node**: ^10.9.2
- **cors**: ^2.8.5
- **dotenv**: ^16.4.5
- **json-server**: ^0.17.4

How to Start Project?

- npm install
- npm run start

## Hosting

### Why Vercel?

I chose to host this project on Vercel instead of Netlify due to issues with registration and authentication on Netlify. Vercel offers several advantages:

- Easy Integration: Vercel provides seamless integration with GitHub, allowing for automatic deployments on push.
- Fast Builds: Vercel's build process is optimized for speed, providing quick feedback during development.
- Serverless Functions: Vercel supports serverless functions, which can be very useful for building full-stack applications.
  Global CDN: Vercel uses a global CDN to ensure fast load times for users around the world.

![verify](/frontend/assets/netlify1.jpeg)
![authentication](/frontend/assets/netlify2.jpeg)

## Notes:

According to the requirements, the categories section needs to be server-side. I have researched several restaurant APIs, such as those from Dicoding, etc., but I have not found an open API that provides the specific functions or data required by the assignment, like category filtering. Therefore, I have decided to create my own

# If you want to see the frontend go checkhout

- [restaurant-frontend](https://github.com/nandaglhp/FrontendDevReactjs-2-AnandaGalihPratiwi)

# If you want to see my project using Open API go chechout

- [forum-app](https://github.com/nandaglhp/react-app-forum)
- [notes-app](https://github.com/nandaglhp/react-notes)
