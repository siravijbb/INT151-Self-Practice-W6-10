// import { CookieUtil } from "./cookieUtils.js"
// CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
// console.log(document.cookie)
// console.log(CookieUtil.get("cartId"))
// CookieUtil.unset("cartId")
// // console.log(document.cookie)
// // document.cookie = "theme=dark"
// // document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
// // document.cookie = "username=umaporn;max-age=60"

let like = Number(sessionStorage.getItem('like'))
if (like === null) {
    sessionStorage.setItem('like', 1)
} else {
    sessionStorage.setItem('like', ++like)
    alert(like)
}

