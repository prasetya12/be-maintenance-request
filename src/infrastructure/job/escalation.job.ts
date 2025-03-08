const cron = require("node-cron");
import escalationUsecase from "../../application/usecase/job/escalation.usecase";


cron.schedule("0 * * * *", async () => {
    await escalationUsecase.execute()
});