export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `Something new has been added. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }