import React, { useState } from "react";

export default function PasswordValidation() {
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    digit: /[0-9]/.test(password),
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "400px", margin: "50px auto" }}>
      <h2>Password Validator</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{
          padding: "10px",
          width: "100%",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />

      <h3>Password Rules:</h3>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
        <li>
          {rules.length ? "✅" : "❌"} At least 8 characters
        </li>
        <li>
          {rules.digit ? "✅" : "❌"} At least one digit
        </li>
        <li>
          {rules.upper ? "✅" : "❌"} At least one capital letter
        </li>
        <li>
          {rules.lower ? "✅" : "❌"} At least one normal (lowercase) letter
        </li>
        <li>
          {rules.special ? "✅" : "❌"} At least one special symbol
        </li>
      </ul>

      {
        Object.values(rules).every(Boolean) && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            ✅ Password is valid!
          </p>
        )
      }
    </div>
  );
}
