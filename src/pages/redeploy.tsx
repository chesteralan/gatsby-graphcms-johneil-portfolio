import React, { useState } from "react"
import axios from "axios"

type Props = {}

const styles: any = {
  margin: 20,
}

const Redeploy = (props: Props) => {
  const [deployed, setDeployed] = useState(false)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value === process.env.GATSBY_REDEPLOY_PASSWORD) {
      axios
        .post("/api/redeploy", { password: evt.target.value })
        .then(function () {
          setDeployed(true)
        })
    }
  }

  return (
    <>
      {!deployed && (
        <input
          type="password"
          placeholder="Enter Password"
          style={styles}
          onChange={handleChange}
        />
      )}
      {deployed && (
        <p>
          Request is sent... Please wait for 10 minutes and check your site...
        </p>
      )}
    </>
  )
}

export default Redeploy
