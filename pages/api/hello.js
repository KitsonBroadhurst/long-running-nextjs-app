// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { time } = JSON.parse(req.body);
  console.log("starint API, waiting: ", time, " seconds");
  await new Promise((resolve) => setTimeout(resolve, time * 100)); // wait time seconds
  res.status(200).json({ success: true });
}
