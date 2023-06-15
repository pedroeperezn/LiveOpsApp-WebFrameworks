export default class GameConfig
{
    constructor(){

        this.data = {
            player: `{
                Speed:2,
                SpeedMin:1,
                SpeedMax:3.
                SpeedAdjustmnt:0.1
                JumpHeight: 0.65,
                Acceleration:10,
                TurnSpeedModifier: 180,
                DeathScreenDelay: 0.5,
                DeathScreenDuration:0.5
            }`,

            EnemyDifficultyList:`
            {
                EnemyLevel:1,
                BossLevel:2,
                DifficultyRampTreshold: 34,
                DifficultyList:[
                    {
                        Speed:2,
                        SpeedMin:1,
                        SpeedMax:3.,
                        SpeedAdjustmnt:0.1,
                        JumpHeight: 0.65,
                        Acceleration:10,
                        TurnSpeedModifier: 180,
                        DetectionRangeWalking: 0.5,
                        DetectionRange:8.5,
                        DetectionConeWidth:10.5,
                        detectionTime:3,
                        AlertRestTime:1.5,
                        ActiveEnemycount:4,

                    },
                    {
                        Speed:2,
                        SpeedMin:1,
                        SpeedMax:3.
                        SpeedAdjustmnt:0.1
                        JumpHeight: 0.65,
                        Acceleration:10,
                        TurnSpeedModifier: 180,
                        DetectionRangeWalking: 0.5,
                        DetectionRange:8.5
                        DetectionConeWidth:10.5
                        detectionTime
                        AlertRestTime:1.5
                    },
                    {
                        Speed:2,
                        SpeedMin:1,
                        SpeedMax:3.
                        SpeedAdjustmnt:0.1
                        JumpHeight: 0.65,
                        Acceleration:10,
                        TurnSpeedModifier: 180,
                        DetectionRangeWalking: 0.5,
                        DetectionRange:8.5
                        DetectionConeWidth:10.5
                        detectionTime
                        AlertRestTime:1.5 
                    }
                ]
            }`
        }
    }
}