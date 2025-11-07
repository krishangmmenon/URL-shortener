## 🔗 URL Shortener

A clean and minimal **URL Shortener** built using **Node.js**, **Express.js**, and **MongoDB**.
This project allows users to enter a long URL and receive a **short, shareable link** that redirects back to the original address. All URLs are stored in a MongoDB database for easy management and persistence.

---

### 🚀 Features

* ✂️ Shorten any valid URL into a compact link.
* 🔁 Redirect short links to their original destination.
* 🧠 Stores URLs in MongoDB using Mongoose.
* ⚙️ Express-based REST API.
* 🚨 Handles invalid and missing URLs gracefully.

---

### 🧰 Tech Stack

| Layer                      | Technology          |
| -------------------------- | ------------------- |
| **Backend**                | Node.js, Express.js |
| **Database**               | MongoDB (Mongoose)  |
| **Environment Management** | dotenv              |

---

### 📁 Project Structure

```
short-url/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── connection.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

### ⚙️ Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/<your-username>/short-url.git
   cd short-url
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Add Environment Variables**
   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=5000
   BASE_URL=http://localhost:5000
   ```

4. **Run the Server**

   ```bash
   npm start
   ```

   or, for development mode:

   ```bash
   npm run dev
   ```

5. **Open in Browser**
   Navigate to: [http://localhost:5000](http://localhost:5000)

---

### 🧩 API Endpoints

| Method   | Endpoint    | Description                                    |
| -------- | ----------- | ---------------------------------------------- |
| **POST** | `/shorten`  | Accepts a long URL and returns a shortened one |
| **GET**  | `/:shortId` | Redirects to the original URL                  |

**Example Request (POST /shorten):**

```json
{
  "originalUrl": "https://www.example.com/some/very/long/url"
}
```

**Example Response:**

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### 💾 Database Schema (Mongoose)

```js
{
  originalUrl: String,
  shortId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

---

### 📊 Future Enhancements

* 📈 Click analytics (track visits per link)
* 🧑‍💼 Custom short codes for registered users
* 🧾 Add expiration for short links
* 💻 Create a simple front-end UI

---

### 👨‍💻 Author

**Krishang Menon**
🌐 https://www.linkedin.com/in/krishang-m/
📧 krishang2004m@gmail.com

---

### 🪪 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute this project for educational or commercial purposes.

---

⭐ **If you like this project, give it a star on GitHub!**
