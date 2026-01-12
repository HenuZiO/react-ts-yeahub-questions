import { Container } from '@/6_shared/ui/container'
import { Section } from '@/6_shared/ui/section'

import styles from '../QuestionPage.module.css'

export const QuestionPageError = () => {
    return (
        <Container className={styles.sections}>
            <div className={styles.main}>
                <Section>
                    Вопрос не найден
                </Section>
            </div>
        </Container>
    )
}