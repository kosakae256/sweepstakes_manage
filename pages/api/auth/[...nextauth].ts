import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const findUserByCredentials = (credentials: any) => {
  console.log(process.env.USER_NAME)
  // 今回は簡易的な例なのでメールアドレスとパスワードが一致する場合にユーザー情報を返却する。
  // データベースでユーザーを管理している場合は、データベースからユーザーを取得して、パスワードハッシュを比較して判定するのがよいかと。
  if (
    credentials.username === process.env.USER_NAME &&
    credentials.password === process.env.USER_PASSWORD
  ) {
    // ログイン可ならユーザー情報を返却
    return { id: 1, name: "Taro", email: "ha?@example.com"}
  } else {
    // ログイン不可の場合は null を返却
    return null
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "tanaka" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = findUserByCredentials(credentials)
            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
            }
        }
    })
],
secret: process.env.NEXT_PUBLIC_SECRET
})