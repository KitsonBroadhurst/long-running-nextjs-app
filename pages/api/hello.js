// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log("starint API...");
  await new Promise((resolve) => setTimeout(resolve, 65000)); // wait 65 seconds
  res.status(200).json({ success: true });
}
