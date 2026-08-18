# 🚀 SkillQ — Remote Technical Interview Platform

<p align="center">
  <img src="./frontend/src/assets/readme-banner.png" alt="SkillQ Remote Interview Platform" width="100%">
</p>

<p align="center">
  <strong>Practice. Interview. Collaborate. Grow.</strong>
</p>

SkillQ is a modern **coding and technical interview platform** designed to provide developers with an interactive environment for coding practice and real-time remote interviews. It combines a VSCode-powered code editor, secure code execution, 1-on-1 video interviews, screen sharing, real-time chat, and automated test-case feedback into a single platform.

The project is built using the **MERN stack** along with modern real-time communication, authentication, background processing, and cloud services.

---

## ✨ Highlights

* 🧑‍💻 **VSCode-Powered Code Editor**
* 🔐 **Authentication via Clerk**
* 🎥 **1-on-1 Video Interview Rooms**
* 🧭 **Dashboard with Live Stats**
* 🔊 **Microphone & Camera Controls**
* 🖥️ **Screen Sharing & Recording**
* 💬 **Real-time Chat Messaging**
* ⚙️ **Secure Code Execution in an Isolated Environment**
* 🎯 **Automatic Test-Case Feedback — Success / Fail**
* 🎉 **Confetti on Successful Submissions**
* 🔔 **Notifications on Failed Submissions**
* 🧩 **Practice Problems Page — Solo Coding Mode**
* 🔒 **Room Locking — Maximum 2 Participants**
* 🧠 **Background Jobs with Inngest**
* 🧰 **REST API with Node.js & Express**
* ⚡ **Data Fetching & Caching with TanStack Query**
* 🤖 **CodeRabbit for PR Analysis & Code Optimization**
* 🧑‍💻 **Git & GitHub Workflow — Branches, PRs & Merges**
* 🚀 **Deployment on Sevalla**

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* TanStack Query
* Monaco / VSCode-powered editor
* Stream Video SDK
* Clerk
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API
* Inngest
* Clerk
* Stream

### Development & Deployment

* Git
* GitHub
* CodeRabbit
* Sevalla

---

## 🎥 Video Interview System

SkillQ provides real-time **1-on-1 technical interview rooms** where an interviewer and candidate can communicate while solving coding problems.

Interview rooms support:

* 🎥 Video calling
* 🎤 Microphone controls
* 📷 Camera controls
* 🖥️ Screen sharing
* 🔴 Recording
* 💬 Real-time chat
* 🧑‍💻 Collaborative coding
* 🔒 Two-participant room restriction

This allows the interviewer and candidate to communicate and solve coding problems within the same environment.

---

## 💻 Coding Environment

SkillQ includes a **VSCode-powered code editor** that allows users to write and execute code directly inside the platform.

The coding environment provides:

* Syntax highlighting
* Multiple programming language support
* Code execution
* Test-case evaluation
* Execution results
* Success / failure feedback
* Practice mode
* Interview mode

---

## ⚙️ Secure Code Execution

Submitted code is executed inside an **isolated environment** rather than directly on the application server.

The execution system evaluates the submitted solution against predefined test cases and returns the result to the user.

### Result Flow

```text
User writes code
       ↓
Run Code
       ↓
Secure Execution Environment
       ↓
Execute Test Cases
       ↓
Evaluate Result
       ↓
Success / Failure
       ↓
User Feedback
```

Successful submissions trigger a celebration animation, while failed submissions provide appropriate feedback.

---

## 🧩 Practice Mode

SkillQ also provides a dedicated **Practice Problems** section for developers who want to improve their coding skills without joining an interview.

Users can:

* Browse coding problems
* Select difficulty levels
* Write solutions
* Execute code
* Test solutions
* Receive automatic feedback
* Practice independently

---

## 🧭 Dashboard

The SkillQ dashboard provides an overview of the user's activity and platform statistics.

It is designed to give users a centralized place to:

* Access coding problems
* Start interview sessions
* View session information
* Track activity
* Manage their learning workflow

---

## 🔐 Authentication

Authentication and user management are handled using **Clerk**.

The authentication system provides secure:

* Sign up
* Login
* Logout
* User sessions
* Protected application routes

---

## 🧠 Background Jobs

SkillQ uses **Inngest** for background and asynchronous tasks.

This allows operations that don't need to block the main request-response cycle to run independently.

```text
Application
     ↓
Event
     ↓
Inngest
     ↓
Background Function
     ↓
Task Completed
```

---

## ⚡ Data Fetching

The frontend uses **TanStack Query** for efficient server-state management.

It provides:

* API data fetching
* Caching
* Automatic refetching
* Loading states
* Error handling
* Query invalidation

---

## 🤖 CodeRabbit

**CodeRabbit** is integrated into the development workflow for automated pull-request analysis and code review.

It helps identify:

* Potential bugs
* Code quality issues
* Optimization opportunities
* Maintainability concerns

---

# 📁 Project Structure

```text
SkillQ/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── ...
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🔧 Environment Variables

## Backend

Create a `.env` file inside `/backend`:

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

## Frontend

Create a `.env` file inside `/frontend`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

> ⚠️ Never commit `.env` files or API secrets to GitHub.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/SkillQ.git
cd SkillQ
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Start the backend development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:9000
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🔄 Application Flow

```text
                 ┌──────────────────┐
                 │      SkillQ      │
                 └────────┬─────────┘
                          │
             ┌────────────┴────────────┐
             ↓                         ↓
       Coding Practice           Interview Room
             │                         │
             ↓                         ↓
       Code Editor              Video + Audio
             │                  Screen Sharing
             ↓                    Real-time Chat
      Code Execution                   │
             │                         ↓
             ↓                  Collaborative
       Test Cases                   Coding
             │
             ↓
      Success / Failure
```

---

# 🌐 Deployment

SkillQ is designed to be deployed using modern cloud infrastructure.

### Deployment Stack

* **Frontend:** Sevalla
* **Backend:** Sevalla
* **Database:** MongoDB Atlas
* **Authentication:** Clerk
* **Video Communication:** Stream
* **Background Jobs:** Inngest

Environment variables should be configured in the deployment platform before starting the application.

---

# 🔒 Security

The project follows several security practices including:

* Environment variables for sensitive credentials
* Protected authentication routes
* Server-side API validation
* Isolated code execution
* Restricted interview room participation
* Secure third-party API credentials

---

# 📚 What I Learned

Building SkillQ provided hands-on experience with:

* Full-stack MERN development
* React application architecture
* REST API development
* MongoDB and Mongoose
* Authentication
* Real-time video communication
* Screen sharing
* Real-time messaging
* Collaborative coding
* Secure code execution
* Background jobs
* Server-state management
* Git and GitHub workflows
* Pull requests and code reviews
* Cloud deployment

---

# 🎯 Future Improvements

Potential future improvements include:

* 👥 Group interviews
* 🤖 AI-powered interview feedback
* 📊 Advanced coding analytics
* 🏆 Leaderboards
* 📹 Improved recording management
* 🧠 AI-generated coding questions
* 💡 AI-powered hints
* 🌍 Multi-language support

---

## ⭐ Support

If you find SkillQ useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ for developers who want to <strong>Learn, Practice & Grow.</strong>
</p>
