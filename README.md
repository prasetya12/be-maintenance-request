# Backend Maintenance Request

## 📌 Stack Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **GraphQL** - Query language for APIs
- **Prisma** - ORM (Object-Relational Mapping) for database management
- **node-cron** - Task scheduling for automated jobs

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/prasetya12/be-maintenance-request
cd your-repo
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your database connection string:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=4000
```

### 4️⃣ Run Database Migrations

```sh
npx prisma migrate dev --name init
```

### 5️⃣ Seed Database

```sh
npx prisma db seed
```

### 6️⃣ Start the Server

```sh
npm run dev
```

The server will run at `http://localhost:4000`.

## 🔗 API Endpoints

### GraphQL Playground

Visit `http://localhost:4000/graphql` to interact with the GraphQL API.
