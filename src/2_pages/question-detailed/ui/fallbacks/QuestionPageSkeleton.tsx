import { Container } from '@/6_shared/ui/container'
import { Section } from '@/6_shared/ui/section'

import styles from '../QuestionPage.module.css'

export const QuestionPageSkeleton = () => {
    return (
        <Container className={styles.sections}>
            <div className={styles.main}>
                <Section>
                    Идет загрузка данных вопроса...
                </Section>
            </div>
            
            <div className={styles.additional}>
                <Section>
                    Идет загрузка данных вопроса...
                </Section>
            </div>
        </Container>
    )
}