# 💱 Currency Converter — React Learning Project

A currency converter web app built while learning **React Custom Hooks**. This project was made to understand how to extract reusable logic out of components using custom hooks.

---

## 🧠 What I Learned

- How to create and use **Custom Hooks** in React
- Using `useState` and `useEffect` together
- **Fetching data from an API** inside a hook
- Passing data between components via **props**
- Using `useId` for accessible form labels
- Styling with **Tailwind CSS**

---

## ✨ Features

- 🔄 Convert between 200+ currencies
- 🔃 Swap button to reverse from/to currencies
- 📡 Live exchange rates from a free API
- 🎨 Beautiful background with glassmorphism UI
- 📱 Responsive layout

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Fawaz Ahmed Currency API** — free, no API key needed

---

## 📁 Project Structure

```
src/
├── Component/
│   └── InputBox.jsx       # Reusable input + currency dropdown component
├── hooks/
│   └── usecustomHook.js   # Custom hook — fetches live exchange rates
├── App.jsx                # Main app logic
└── main.jsx
```

---

## 🪝 The Custom Hook

The heart of this project — `usecustomHook.js` fetches live currency data and returns it to any component that needs it:

```js
function usecustomHook(currency) {
    const [rate, setRate] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
            .then((res) => res.json())
            .then((res) => setRate(res[currency.toLowerCase()]))
    }, [currency])

    return rate
}
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone <your-repo-url>

# Install dependencies
npm install

# Run the dev server
npm run dev
```

---

## 🌐 API Used

[Fawaz Ahmed Exchange API](https://github.com/fawazahmed0/exchange-api)
- ✅ Free
- ✅ No API key required
- ✅ No rate limits
- ✅ 200+ currencies including crypto

---

## 🐛 Bugs Fixed Along the Way

- Component not rendering — function name was lowercase (`inputBox` → `InputBox`)
- Dropdown empty — API response needed `.rates` / `res[currency]` not `res[currency]` at top level
- Input showing `01` — fixed with `value={amount === 0 ? '' : amount}`
- Wrong currency case — API needs lowercase (`usd` not `USD`)

---

## 📌 Status

✅ Complete — built as a learning exercise for React custom hooks.
