'use client'

import {
    Step, StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepSeparator,
    StepStatus, StepTitle,
    useSteps
} from "@chakra-ui/stepper";
import {Box} from "@chakra-ui/react";
import {IDealInfoProgress, IProgressSteps} from "@/types/ProgressDealTypes/ProgressDealTypes";

export function VerticalStepper({ progressSteps} : IProgressSteps) {
    const { activeStep } = useSteps({
        index: progressSteps.length,
        count: progressSteps.length,
    })

    return (
        <div className={'w-full'}>
            <Stepper index={activeStep} orientation='vertical' height={'100%'} gap='5'>
                {progressSteps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle>{step.date}</StepTitle>
                            <StepDescription>
                                {step.title}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </div>

    )
}