const axios = require("axios")

const redeployHandler = (req: any, res: any) => {
  try {
    axios.post(process.env.REDEPLOY_URL, {})

    res.status(200).json({
      message:
        "Site is now rebuilding... please close this page to avoid multiple rebuilds... and DO NOT REFRESH...",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}

module.exports = redeployHandler
