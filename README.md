# Project: ProjectManagementApp
## Project url: **https://main.d1t8jycaljnzcu.amplifyapp.com**
## Overview
### This project is a completely responsive Task Management Application developed using Next.js, T3 stack, and integrated with a serverless backend. The application utilizes Supabase as the database for user authentication and data storage. The application uses nextAuth as authentication provider.

## Features

### 1. Dashboard Interface :
1. Analytics of ongoing projects, tasks, In progress and High Priority tasks, closest deadline project.
2. View & Add, Edit, Delete, Update Projects.
3. Go to the Tasks Page.
4. Only Logged in user can add/edit projects.


### 2. Tasks Interface:
1. View, Add, Edit, Delete Tasks.
2. Assign tasks to members who are registered to the app.
3. Add status, priority and deadlines.
4. Add detailed descriptions and view it.
5. Filters for customized tasks view.
6. Only Logged in user can add/edit tasks.

### 3. Profile Interface:
1. Only Logged in user can view or edit their profiles.

### 4. Serverless Backend:
1. Made only using server-actions

### 5. Database Integration with Supabase
1. Utilizes Supabase as the database for the application.
2. Implements CRUD operations interacting with the Supabase database.

## Project Setup

### 1. Clone the repository:
**git clone https://github.com/your-username/ProjectManagementApp.git**


### 2. Install dependencies:
**cd pm-app**
**npm install**

### 3. Environment Variables:
**Create a .env file in pm-app**
Add your supabase connection url and annon_key(can be seen in supabase dashboard)
**NEXT_PUBLIC_SUPABASE_URL=your_supabase_url**
**NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key**
**more info: https://supabase.com/dashboard/project/settings/auth**

### 4. Run the development server:
**npm run dev**

## Architecture
#### Frontend: Next.js with TypeScript, Tailwind CSS, tRPC, and NextAuth.js for authentication.
#### Backend: Serverless backend.
#### Database: Supabase for data storage.
#### Deployment: AWS Amplify

## Testing
**npm run test**


## Contributing
We welcome contributions to improve ProjectManagementApp. Please fork the repository and create a pull request with your suggested changes.This project can be taken to shores by valuable contribution and time.

## Credits
This project was created with the help of the following resources:

**T3 Stack**
**Next.js**
**Supabase**
**AWS**


## Contact
For any questions or feedback, please reach out to **kundu4coding@gmail.com**.