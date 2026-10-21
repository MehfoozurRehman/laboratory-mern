# Laboratory MERN

A MERN-stack prototype for a diagnostic laboratory: a React dashboard for patients, reports and test results, and an Express and MongoDB API that is only partly built.

**Status:** Prototype. The React dashboard has many screens, and the backend has a user model and a registration handler, but registration does not save users, login is empty, the patient and report routes are empty files, and the frontend never calls the API.

## The problem

The code is meant for a pathology laboratory: staff register patients, produce lab reports, track test results and sign reports off by role. The UI shows the intended screens, but the data and the server logic behind them are mostly not written yet.

## What it does

- **Dashboard shell.** `frontend/src/App.js` routes `/` to the login screen and `/dashboard` to the main layout, with a sidebar (`components/SideBar.js`).
- **Dashboard screens.** The `screens/` folder holds about 20 panels, including a dashboard, a company details view, reports, payments, plans and messages. Several of the screens use charts (`BarChart`, `LineChart`, `DoughnutChart`, `SpineChart`) built on Chart.js.
- **Filters and forms.** `FilterInputForm.js`, `Inputbox.js` and `Button.js` are reusable form pieces used across the screens.
- **User registration endpoint.** `POST /auth/register` in `backend/src/routes/auth.js` reads an organization, name, email and password from the request body and builds a `user` document from the Mongoose model.

## How it's built

- Frontend: React 17 with React Router 5, React-Bootstrap 4 and MDBReact for components, Chart.js 2 through `react-chartjs-2`, styled with SCSS. It was created with Create React App (`react-scripts` 5). A `firebase.json` file sets up Firebase Hosting with a single-page rewrite to `index.html`.
- Backend: Express 4 with `cors` and `express.json()`, and Mongoose 6 for MongoDB. The routers are mounted under `/auth`, and each Mongoose model (`user`, `patient`, `report`) is in `backend/src/models/`.
- Architecture decision: the frontend and backend are separate folders with separate `package.json` files, and the API is a plain REST service that the React app would call. No such calls exist yet.
- The `user` schema requires organization, name, email and password. Passwords are stored as provided. `bcrypt` is a dependency, but no code uses it yet.

## Running it locally

Backend. The `dev` and `start` scripts run `node api.js` first, but `api.js` is not in the repository, so the scripts fail. Start the server directly:

```bash
cd backend
npm install
node src/index.js     # API on port 9000
```

Frontend, in a separate terminal:

```bash
cd frontend
npm install --legacy-peer-deps
npm start             # React dev server at http://localhost:3000
npm run build         # production build
npm test              # Jest tests (none are written yet)
```

MongoDB is needed for the backend to connect. The connection string is hardcoded in `backend/src/index.js`, and the port is fixed at 9000. Neither reads from an environment variable.

## What's left

- A MongoDB connection string with credentials is hardcoded in `backend/src/index.js`. It should be read from an environment variable, and the credential should be rotated.
- `POST /auth/register` builds a user document but never calls `save()` and never sends a response, so requests hang.
- `POST /auth/login` is an empty handler and never responds.
- `backend/src/routes/patient.js` and `backend/src/routes/report.js` are empty files, even though patient and report models exist.
- `backend/package.json` runs `node api.js` before the server, and that file is missing.
- The frontend makes no API calls. Screen data is hardcoded, and the lab-specific features described in the old README (test inventory, report generator, role-based approvals) are not in the code.
- Several screen names (JobSeekerPanel, FreelancerPanel, PostingDetails, PlansPanel) suggest the UI was adapted from a job-marketplace template. The frontend `package.json` is still named `aida-pro-dashboard`.
- No tests are written. `firebase.json` points at a `build` folder, but no deployment is documented.
- The lockfile and `.firebase` cache are committed; the cache folder is not needed for the app.
