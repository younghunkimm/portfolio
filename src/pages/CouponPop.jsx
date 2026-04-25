// layout
import Layout from "../layout/Layout";
import Section from "../layout/Section";

// components
import ImageBox from "../components/project/ImageBox";
import ProjectOverview from "../components/project/ProjectOverview";
import ContentBox from "../components/project/ContentBox";
import BulletList from "../components/project/BulletList";

// cover
import CouponPopCover from "../assets/images/couponpop_cover.jpg";

// code
import CodeBlock from "../components/CodeBlock/CodeBlock";

// image
import InfraArchitectureImage from "../assets/projects/couponpop/infra_architecture.png";
import ErdMonoImage from "../assets/projects/couponpop/erd_mono.png";
import ErdMSAMemberImage from "../assets/projects/couponpop/erd_msa_members.png";
import ErdMSAStoresImage from "../assets/projects/couponpop/erd_msa_stores.png";
import ErdMSACouponsImage from "../assets/projects/couponpop/erd_msa_coupons.png";
import ErdMSACouponHistoriesImage from "../assets/projects/couponpop/erd_msa_coupon_histories.png";
import ErdMSACouponUsageStatsImage from "../assets/projects/couponpop/erd_msa_coupon_usage_stats.png";
import ErdMSANotificationsImage from "../assets/projects/couponpop/erd_msa_notifications.png";
import SpikeTest_1 from "../assets/projects/couponpop/spike_test_1.png";
import RampUpTest_1 from "../assets/projects/couponpop/ramp_up_test_1.png";
import RampUpTest_2 from "../assets/projects/couponpop/ramp_up_test_2.png";

const CouponPopPage = () => {
    return (
        <Layout>
            {/* 프로젝트 개요 */}
            <Section title="쿠폰팝 (CouponPop) - test">
                <ProjectOverview
                    description={
                        <>
                            CouponPop은 사용자의 <b>현재 위치 기반</b>으로 주변
                            매장에서 제공하는{" "}
                            <b>한정 수량 쿠폰을 실시간 발급</b>하고, 푸시
                            알림으로 즉시 전달하는 지역 특화 프로모션
                            플랫폼입니다.
                            <br />
                            <br />
                            모바일/웹 공통 알림, 피크 트래픽 대응, MSA 전환 이후
                            JOIN 문제 해결까지 포함해 <b>신뢰성과 운영성</b>을
                            중심으로 설계했습니다.
                        </>
                    }
                    metrics={[
                        { label: "중복 알림", value: "0건" },
                        { label: "재시도 + DLQ", value: "지수 백오프" },
                        { label: "부하 테스트", value: "k6 + Grafana" },
                    ]}
                    goals={[
                        "모바일/웹 공통 알림 + 앱 종료/백그라운드에서도 푸시 보장",
                        "대량 이벤트에서도 중복 없는 알림(멱등성) + 안정적 재시도",
                        "성능 테스트로 병목을 드러내고 개선 포인트 도출",
                    ]}
                    imageSrc={CouponPopCover}
                    imageAlt="CouponPop 서비스 개요"
                    info={[
                        "기간: 2025.10.13 ~ 2025.11.18",
                        "팀원: 백엔드 4명",
                        "역할: 알림/이벤트 설계 및 구현",
                        "스택: Java 17, Spring Boot 3.x, MySQL 8.x, Redis, RabbitMQ, FCM, Flyway, OpenFeign, Slack Webhook, K6, Prometheus, Grafana",
                        "배포/운영: AWS(ECS/ALB), Jenkins, Blue/Green",
                    ]}
                />
            </Section>

            {/* 역할 */}
            <Section title="내가 맡은 기능">
                <ContentBox>
                    <BulletList
                        items={[
                            "FCM 알림 시스템 설계 및 구현",
                            "Redis 멱등성 처리로 중복 알림 0건",
                            "RabbitMQ 재시도/DLQ 전략 설계",
                            "k6 성능 테스트 및 병목 분석",
                        ]}
                    />
                </ContentBox>
            </Section>

            {/* 실시간 알림 전송 방식 선정 (FCM vs SSE) */}
            <Section title="실시간 알림 전송 방식 선정 (FCM vs SSE)">
                <ContentBox title="1. 배경">
                    <BulletList
                        items={[
                            "사용자에게 실시간 알림(푸시 알림, 이벤트 발생 등) 필요",
                            "서버에서 클라이언트로 직접 연결을 유지하는 Server-Sent Events(SSE) 방식과 외부 메시징 플랫폼을 이용하는 Firebase Cloud Messaging(FCM) 방식을 검토",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="2. 요구사항">
                    <BulletList
                        items={[
                            "모바일 및 웹 모두 지원",
                            "실시간성 확보",
                            "백엔드 부하 최소화",
                            "보안 및 안정성 확보",
                            "앱 실행, Background, 종료 상태 모두 지원",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="3. 고려한 대안">
                    <BulletList
                        title="FCM"
                        items={[
                            "Google의 푸시 서버를 통해 비동기 전달 가능",
                            "Android, iOS, Web 다양한 플랫폼 지원",
                            "Google 서버를 사용하기 때문에 인프라 부하 감소",
                            "재시도/큐잉/오프라인 전송 지원",
                            "설정이 간단하고, 무료로 이용 가능",
                            "대규모 알림, 모바일 중심 서비스에 적합",
                        ]}
                    />
                    <BulletList
                        title="SSE"
                        items={[
                            "서버에서 직접 클라이언트로 지속 연결 유지 필요",
                            "브라우저 중심이기 때문에 모바일은 한계 있음",
                            "클라이언트 수만큼 연결을 유지해야 하기 때문에 인프라 부하 증가",
                            "연결이 끊기면 수동으로 복구 필요",
                            "직접 구현 및 연결 관리가 필요하여 설정이 복잡",
                            "직접 인증 로직 구현이 필요",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="4. FCM 도입 이유">
                    <BulletList
                        title="모바일 푸시 알림 지원"
                        items={[
                            "Android/iOS 푸시를 기본적으로 지원",
                            "웹 브라우저의 Notification API와도 연동 가능",
                        ]}
                    />
                    <BulletList
                        title="서버 부하 최소화"
                        items={[
                            "실시간 연결 유지 필요 없이 Google의 푸시 인프라를 사용",
                            "다수의 유저에게 동시에 알림을 발송해도 서버 리소스에 부담이 없음",
                        ]}
                    />
                    <BulletList
                        title="전달 안정성 보장"
                        items={[
                            "오프라인 사용자에게도 큐잉 후 재전송이 가능",
                            "전송 실패/성공 로그 제공으로 모니터링이 용이",
                        ]}
                    />
                    <BulletList
                        title="보안 및 인증 체계 통합"
                        items={[
                            "Firebase Authentication, Access Token 기반의 안전한 전송이 가능",
                            "HTTPS 기반 통신으로 네트워크 보안을 확보",
                        ]}
                    />
                    <BulletList
                        title="운영 단순화 및 확장성"
                        items={[
                            "인프라 확장이 불필요",
                            "서버는 메세지 생성 및 발송 요청만 처리",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="5. SSE 미선정 사유">
                    <BulletList
                        items={[
                            "클라이언트 수가 많을 경우 서버의 오픈 커넥션 유지 비용 증가",
                            "모바일 환경에서는 백그라운드 유지가 불가능하거나 제한적",
                            "네트워크 단절 시 재연결/복구 로직을 직접 구현해야 하는 부담",
                            "서버 Scale out 시 로드밸런싱 및 세션 동기화 복잡도가 증가",
                        ]}
                    />
                </ContentBox>
            </Section>

            <Section title="중복 알림 방지를 위한 Redis 멱등성 처리">
                <ContentBox title="1. 문제 발생">
                    <BulletList
                        items={[
                            "FCM 알림이 특정 상황에서 중복 발송되는 문제 발생",
                            "재시도 로직이 개입되거나 동일 이벤트가 여러 번 발행되면 같은 알림이 사용자에게 중복 발송",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="2. 원인">
                    <BulletList
                        items={[
                            "문제의 핵심은 각 알림 이벤트를 고유하게 식별할 수 있는 값이 없다는 점",
                            "발행 측에서 알림마다 고유한 식별자를 생성하지 않음",
                            "수신 측에서는 incoming 이벤트가 중복인지 확인할 방법이 없음",
                            "결국 재시도나 중복 발행이 모두 중복 알림 발송으로 이어짐",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="3. 해결">
                    <BulletList
                        title="발행 측: traceId 생성"
                        items={[
                            <>
                                알림을 식별할 수 있도록 '고유한 조합값 → UUID
                                변환 → traceId' 생성
                                <CodeBlock language="java">
                                    {`String traceId = NotificationTraceIdGenerator
				.generate(item.aggregatedAt(), memberId, token, topDong, topHour);

CouponUsageStatsFcmSendMessage couponUsageStatsFcmSendMessage =
		CouponUsageStatsFcmSendMessage.of(traceId, memberId, token, topDong, topHour, activeEventCount);
		
couponUsageStatsFcmSendPublisher.publish(couponUsageStatsFcmSendMessage);`}
                                </CodeBlock>
                            </>,
                            "동일한 입력 조합 → 항상 동일 UUID",
                            "이벤트 객체에 traceId 포함 후 발행",
                        ]}
                    />
                    <BulletList
                        title="수신 측: Redis 멱등성 락 적용"
                        items={[
                            <>
                                알림 처리 여부를 Redis SET NX 로 판단
                                <CodeBlock language="java">
                                    {`public boolean acquireProcessingKey(String traceId) {

    String key = KEY_PATTERN.formatted(traceId);
    // 키가 없을 때만 설정 (멱등성 보장)
    Boolean success = stringRedisTemplate.opsForValue().setIfAbsent(key, PROCESSING_VALUE, PROCESSION_TTL);

    return Boolean.TRUE.equals(success);
}`}
                                </CodeBlock>
                            </>,
                            "존재하는 traceId → false → 즉시 종료",
                            "존재하지 않는 traceId -> true -> 알림 발송 진행",
                        ]}
                    />
                    <BulletList
                        title="정상 발송 시 TTL 연장"
                        items={[
                            <>
                                최근 7일간은 중복 발송을 확실하게 차단
                                <CodeBlock language="java">
                                    {`public void markAsDone(String traceId) {

    String key = KEY_PATTERN.formatted(traceId);
    stringRedisTemplate.opsForValue().set(key, DONE_VALUE, DONE_TTL);
}`}
                                </CodeBlock>
                            </>,
                        ]}
                    />
                    <BulletList
                        title="실패 시 제거"
                        items={[
                            <>
                                재시도 가능하도록 즉시 삭제
                                <CodeBlock language="java">
                                    {`public void release(String traceId) {

    stringRedisTemplate.delete(KEY_PATTERN.formatted(traceId));
}`}
                                </CodeBlock>
                            </>,
                        ]}
                    />
                </ContentBox>
            </Section>

            <Section title="RabbitMQ 알림 재시도 및 DLQ 전략">
                <ContentBox title="1. 문제 발생">
                    <BulletList
                        title="알림 발송 실패 시 전략 구성"
                        items={[
                            "FCM 서버 장애 시 언제 재시도할 것인지",
                            "어떤 경우 바로 DLQ로 보낼 것인지",
                        ]}
                    />
                    <BulletList
                        title="초기 문제점 1: 재시도/비재시도 에러 기준 불명확"
                        items={[
                            "FCM 서버에서 내려오는 에러코드 및 HTTP 상태에 따라 재시도 여부가 달라짐",
                        ]}
                    />
                    <BulletList
                        title="초기 문제점 2: Spring AMQP 재시도와 DLQ 흐름이 뒤섞임"
                        items={[
                            "Listener 쪽에서 예외를 어떻게 던지느냐에 따라 같은 에러라도 재시도 될 수도 있고 바로 DLQ로 갈 수도 있는 상황",
                        ]}
                    />
                </ContentBox>
                <ContentBox title="2. 원인1️⃣">
                    <BulletList
                        title="FCM 에러코드를 분류하지 않음"
                        items={[
                            <>
                                FCM은 FirebaseMessaingException 으로 에러를
                                던지는데, 그 안에는 아래와 같은 정보가 포함되어
                                있음
                                <br />- <b>MessagingErrorCode</b>{" "}
                                <small>(애플리케이션 레벨 에러 코드)</small>
                                <br />- <b>IncomingHttpResponse</b>{" "}
                                <small>(HTTP 상태 코드)</small>
                                <br />
                            </>,
                            <>
                                이걸 활용해 다음처럼 나눌 수 있음
                                <CodeBlock language="java">
                                    {`private boolean isRetryable(FirebaseMessagingException e) {

    MessagingErrorCode errorCode = e.getMessagingErrorCode();

    if (errorCode != null) {
        return switch (errorCode) {
            case INTERNAL, /* 서버 내부 오류 */
                 UNAVAILABLE, /* FCM 서비스 사용 불가 */
                 QUOTA_EXCEEDED /* 할당량 초과 */ -> true;
            default -> false;
        };
    }

    IncomingHttpResponse httpResponse = e.getHttpResponse();
    if (httpResponse == null) {
        return false;
    }
    int statusCode = httpResponse.getStatusCode();
    return statusCode == 429 // Too Many Requests
            || (500 <= statusCode && statusCode < 600); // 5xx 서버 오류
}`}
                                </CodeBlock>
                                하지만 초반에는 이런 분류 로직 없이 "일단 다
                                재시도" 혹은 "일단 다 실패 처리" 같은 식으로
                                다뤘고, 그 결과
                                <br />
                                - 토큰 문제가 명백한 케이스도 계속 재시도해서
                                불필요한 부하
                                <br />
                                - 일시 장애(5xx)도 한 번 실패하면 바로 포기해서
                                알림 유실
                                <br />이 발생할 여지가 있었음
                            </>,
                        ]}
                    />
                </ContentBox>
                <ContentBox title="3. 원인2️⃣">
                    <BulletList
                        title="Spring AMQP의 재시도/재큐잉/DLQ 흐름을 명확히 설계하지 않음"
                        items={[
                            <>
                                RabbitMQ Listener 쪽은 @RabbitListener +
                                SimpleRabbitListenerContainersFactory 설정을
                                사용하는데
                                <br />
                                - 어떤 예외를 던지면 재시도가 일어나는지
                                <br />- 어떤 예외를 던지면 바로 DLX로 가는지
                                <br />
                                설계 필요
                            </>,
                            <>
                                최종 정리
                                <CodeBlock language="java">
                                    {`@Bean
public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(
        ConnectionFactory connectionFactory,
        MessageConverter rabbitListenerMessageConverter
) {

    // AmqpRejectAndDontRequeueException은 즉시 DLQ로 보내도록 재시도 대상에서 제외
    Map<Class<? extends Throwable>, Boolean> retryableExceptions = new HashMap<>();
    retryableExceptions.put(AmqpRejectAndDontRequeueException.class, false);

    SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy(
            MAX_ATTEMPTS, // 최대 재시도 횟수
            retryableExceptions, // 재시도 대상 제외 설정
            true // 나머지 예외는 재시도 대상
    );

    // 재시도 인터셉터 설정
    RetryOperationsInterceptor retryAdvice = RetryInterceptorBuilder.stateless()
            // 재시도 정책 설정
            .retryPolicy(retryPolicy)
            // 지수 백오프 기반 재시도 설정 (1초, 2초, 4초, 8초, ...)
            .backOffOptions(BACKOFF_INITIAL_INTERVAL, BACKOFF_MULTIPLIER, BACKOFF_MAX_INTERVAL)
            // RetryInterceptor가 최대 재시도 횟수를 모두 소진했을 때 호출되는 복구 전략 (재큐잉하지 않고 바로 DLX로 보냄)
            .recoverer(new RejectAndDontRequeueRecoverer())
            .build();

    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory);
    factory.setMessageConverter(rabbitListenerMessageConverter);
    factory.setConcurrentConsumers(DEFAULT_CONCURRENT_CONSUMERS); // 기본 동시 소비자 수
    factory.setMaxConcurrentConsumers(MAX_CONCURRENT_CONSUMERS);  // 최대 동시 소비자 수
    factory.setPrefetchCount(PREFETCH_COUNT);  // 한 번에 가져올 메시지 수
    factory.setDefaultRequeueRejected(false);  // 예외 시 재큐잉 여부 - nack(requeue=false) 설정
    factory.setAdviceChain(retryAdvice);
    return factory;
}`}
                                </CodeBlock>
                                - 기본적으로 모든 예외는 재시도 대상
                                <br />
                                - 단, AmqpRejectAndDontRequeueException 은
                                재시도에서 제외, 즉시 DLX로 이동
                                <br />- 재시도 횟수 초과 시
                                RejectAndDontRequeueRecoverer 로
                                NACK(requeue=false) → DLX 이동
                            </>,
                        ]}
                    />
                </ContentBox>
                <ContentBox title="4. 해결">
                    <BulletList
                        title="재시도 가능/불가능 예외를 명확히 분리"
                        items={[
                            <>
                                FCM 발송 로직에서 책임을 명확히 나눔
                                <br />
                                - RetryableFcmException: 재시도하면 성공
                                가능성이 있는 경우
                                <br />- NonRetryableFcmException: 재시도해도
                                의미 없는 경우 (잘못된 토큰, 유효하지 않은 요청
                                등)
                                <CodeBlock language="java">
                                    {`public CompletableFuture<Void> sendNotification(String traceId, Long memberId, String token, String title, String body) {

    return CompletableFuture.runAsync(() -> {
        // ...

        try {
            String messageId = firebaseMessaging.send(message);
            // ...
        } catch (FirebaseMessagingException e) {
            // ...

            if (isRetryable(e)) {
                throw new RetryableFcmException(e.getMessage(), e); // 재시도 가능한 예외
            }
            throw new NonRetryableFcmException(e.getMessage(), e); // 재시도 불가능한 예외
        } catch (Exception e) {
            // ...
            throw new NonRetryableFcmException("FCM 전송 중 예상치 못한 오류가 발생했습니다.", e);
        }
    }, fcmTaskExecutor);
}`}
                                </CodeBlock>
                                이렇게 해서 FCM 발송 서비스의 역할은 "예외
                                분류"까지만 담당하도록 설계
                            </>,
                        ]}
                    />
                    <BulletList
                        title="Listener에서 CompletionException을 풀어서 처리"
                        items={[
                            <>
                                Listener에서는 CompletionException의 cause를
                                꺼낸 후,
                                <br />
                                그게 RetryableFcmException 인지 여부에 따라
                                DLQ로 보낼지 재시도할지를 결정
                                <CodeBlock language="java">
                                    {`@RabbitListener(queues = COUPON_USAGE_STATS_FCM_SEND_QUEUE)
public void handle(CouponUsageStatsFcmSendMessage payload) {

    try {
        // ...

        // FCM 알림 푸시 실패 시 재시도/DLQ 처리를 위해 Blocking
        fcmSendService.sendNotification(traceId, memberId, token, title, body).join();
    } catch (CompletionException e) {
        Throwable cause = e.getCause();
        if (cause instanceof NonRetryableFcmException nonRetryable) {
            log.warn("재시도 불가 FCM 전송: memberId={}, reason={}", payload.memberId(), nonRetryable.getMessage());

            // 재시도 불가 예외는 DLQ로 보내기 위해 AmqpRejectAndDontRequeueException으로 래핑
            throw new AmqpRejectAndDontRequeueException(nonRetryable.getMessage(), nonRetryable);
        }

        // 그 외 예외는 재시도 가능하므로 그대로 예외 던지기
        throw e;
    }
}`}
                                </CodeBlock>
                                - NonRetryableFcmException →
                                AmqpRejectAndDontRequeueException으로 래핑해서
                                throw → 재시도 정책에서 제외시키고, 즉시 DLQ
                                이동
                                <br />- 나머지(RetryableFcmException 포함) →
                                그냥 예외 던짐 → Spring Retry가 설정한 정책에
                                따라 재시도
                            </>,
                        ]}
                    />
                    <BulletList
                        title="Spring retry 정책 설계"
                        items={[
                            <>
                                지수 백오프 + 최대 5회 재시도
                                <br />
                                - 재시도 가능한 예외 → 1s, 2s, 4s, 8s, … 식 지수
                                백오프로 재시도
                                <br />
                                - 최대 횟수(5번) 소진 시 →
                                RejectAndDontRequeueRecoverer →
                                NACK(requeue=false) → DLX로 이동
                                <br />- AmqpRejectAndDontRequeueException → 아예
                                재시도 정책에서 제외 → 바로 DLX
                                <CodeBlock language="java">
                                    {`// AmqpRejectAndDontRequeueException은 즉시 DLQ로 보내도록 재시도 대상에서 제외
Map<Class<? extends Throwable>, Boolean> retryableExceptions = new HashMap<>();
retryableExceptions.put(AmqpRejectAndDontRequeueException.class, false);

SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy(
        MAX_ATTEMPTS, // 최대 재시도 횟수 (예: 5회)
        retryableExceptions, // 재시도 대상 제외 설정
        true // 나머지 예외는 재시도 대상
);

// 재시도 인터셉터 설정
RetryOperationsInterceptor retryAdvice = RetryInterceptorBuilder.stateless()
        // 재시도 정책 설정
        .retryPolicy(retryPolicy)
        // 지수 백오프 기반 재시도 설정 (1초, 2초, 4초, 8초, ...)
        .backOffOptions(BACKOFF_INITIAL_INTERVAL, BACKOFF_MULTIPLIER, BACKOFF_MAX_INTERVAL)
        // 최대 재시도 횟수 모두 소진 시, 재큐잉하지 않고 바로 DLX로 보냄
        .recoverer(new RejectAndDontRequeueRecoverer())
        .build();`}
                                </CodeBlock>
                            </>,
                        ]}
                    />
                    <BulletList
                        title="DLQ Listener에서 Slack 알림으로 즉시 인지"
                        items={[
                            <>
                                DLQ로 쌓인 메세지는 별도 Listener에서 처리
                                <CodeBlock language="java">
                                    {`@RabbitListener(queues = COUPON_USAGE_STATS_FCM_SEND_DLQ)
public void handleDlq(CouponUsageStatsFcmSendMessage payload, Message message) {

    log.error("쿠폰 사용 통계 FCM DLQ 적재: memberId={}, token={}, headers={}",
            payload.memberId(),
            payload.token(),
            message.getMessageProperties().getHeaders());

    // Slack 알림 전송
    Map<String, Object> headers = message.getMessageProperties().getHeaders();
    Map<String, String> slackData = Map.ofEntries(
            entry("traceId", safeString(payload.traceId())),
            entry("memberId", safeString(payload.memberId())),
            entry("token", maskToken(payload.token())),
            entry("topDong", safeString(payload.topDong())),
            entry("topHour", safeString(payload.topHour())),
            entry("activeEventCount", safeString(payload.activeEventCount())),
            entry("xDeath", safeString(headers.get("x-death"))),
            entry("exception", safeString(headers.get("x-exception-message"))),
            entry("stacktrace", safeString(headers.get("x-exception-stacktrace"))),
            entry("routingKey", safeString(message.getMessageProperties().getReceivedRoutingKey()))
    );
    slackService.sendMessage("쿠폰 사용 통계 FCM DLQ 적재", slackData);
}`}
                                </CodeBlock>
                                DLQ 적재 시점에 에러 정보를 Slack으로 전송해서
                                알림 유실이 장기화되기 전에 바로 인지할 수
                                있도록 처리
                            </>,
                        ]}
                    />
                </ContentBox>
            </Section>

            {/* 성능 */}
            <Section title="성능 개선: 쿠폰 발급 API">
                <ContentBox title="부하 테스트 결과">
                    <BulletList
                        items={[
                            "Spike(50 VU): p95 2.01s",
                            "Ramp-Up(300 VU): p95 18.8s",
                            "병목: ThreadPool / DB Connection / Lock",
                        ]}
                    />
                    <ImageBox src={SpikeTest_1} label="Spike 테스트 1" />
                    <ImageBox src={RampUpTest_1} label="Ramp-Up 테스트 1" />
                    <ImageBox src={RampUpTest_2} label="Ramp-Up 테스트 2" />
                </ContentBox>
            </Section>

            {/* ERD */}
            <Section title="모놀리식 ERD 구성">
                <ContentBox title="">
                    <ImageBox src={ErdMonoImage} label="모놀리식 ERD" />
                </ContentBox>
            </Section>
            <Section title="MSA ERD 구성">
                <ContentBox
                    title=""
                    className="grid gap-6 md:grid-cols-3 sm:grid-cols-2"
                >
                    <ImageBox src={ErdMSAMemberImage} label="MSA Member ERD" />
                    <ImageBox src={ErdMSAStoresImage} label="MSA Stores ERD" />
                    <ImageBox
                        src={ErdMSACouponsImage}
                        label="MSA Coupons ERD"
                    />
                    <ImageBox
                        src={ErdMSACouponHistoriesImage}
                        label="MSA Coupons Histories ERD"
                    />
                    <ImageBox
                        src={ErdMSACouponUsageStatsImage}
                        label="MSA Coupon Usage Stats ERD"
                    />
                    <ImageBox
                        src={ErdMSANotificationsImage}
                        label="MSA Notifications ERD"
                    />
                </ContentBox>
            </Section>

            {/* 인프라 아키텍처 */}
            <Section title="인프라 아키텍처">
                <ContentBox title="">
                    <ImageBox
                        src={InfraArchitectureImage}
                        label="인프라 아키텍처"
                    />
                </ContentBox>
            </Section>
        </Layout>
    );
};

export default CouponPopPage;
