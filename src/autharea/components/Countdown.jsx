import { useEffect, useState } from "react"
import { getTimeRemain } from "../../utils/countdownTime"

const Countdown = ({ endDate }) => {
    const temp = {
            daysRemaining: '',
            hoursRemaining: '',
            minutesRemaining: '',
            secondsRemaining: ''
        }
    const [timeRemain, setTimeRemain] = useState(temp) 

    useEffect(() => {

        function updateTimeRemain() {
            let expiration = endDate || new Date(2023, 0, 0, 0, 0, 0)
            const todayDate = new Date()
            const temp = expiration.getTime() - todayDate.getTime()

            if (temp <= 0) {
                clearInterval(countdownId)
            }

            setTimeRemain(getTimeRemain(expiration))
        }

        const countdownId = setInterval(updateTimeRemain, 1000)
        updateTimeRemain()

        return () => clearInterval(countdownId)
    }, [endDate])

    return (
        <div className="countdown">
            <h4>ENDS IN</h4>
            <h4>
                <span>{timeRemain.daysRemaining || 0} days :</span>
                <span>{timeRemain.hoursRemaining || 0} hrs :</span>
                <span>{timeRemain.minutesRemaining || 0} mins :</span>
                <span>{timeRemain.secondsRemaining || 0} secs</span>
            </h4>
        </div>
    )
}

export default Countdown