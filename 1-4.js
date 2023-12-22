import React from "react";

export default function ConditionalRendering({ isLoggedIn }) {
  let status = isLoggedIn ? "已登入" : "未登入";

  return <>{status}</>;
}
