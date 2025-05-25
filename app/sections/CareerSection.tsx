import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const CareerSection: React.FC = () => {
  return (
    <>
      {/* career Section */}
      <div>
        <h2 className="text-2xl font-bold">커리어</h2>
        <div className="space-y-10 mt-6">
          {/* 메타빌드 */}
          <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-orange-500 dark:text-orange-200">
                  <Image src="/images/logos/metabuild.png" alt="meta" width={30} height={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">(주) 메타빌드</h3>
                  <p className="text-sm text-muted-foreground">2024.01 - (재직 중)</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground italic">&quot;연계/미들웨어 솔루션 기업&quot;</p>
              <div className="mt-4">
                {/* 한국청소년 상담복지개발원 */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-background hover:bg-accent text-foreground transition-colors">파견근무</Badge>
                      <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Spring(Egov)</Badge>
                      <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Vue</Badge>
                      <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Exbuilder</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Tibero</Badge>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Image src="/images/logos/1388_CI.png" alt="Company 1" width={50} height={50} />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">한국청소년 상담복지개발원</p>
                        <p className="text-xs text-muted-foreground">위기청소년 통합지원 시스템 운영</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-4 bg-border dark:bg-gray-700"></div>
                        <p className="font-bold text-foreground">통계시스템 개선</p>
                        <span className="text-muted-foreground">|</span>
                        <p className="text-sm text-muted-foreground">2025년 상반기</p>
                      </div>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        오집계 이슈 해결을 위한 쿼리 성능 개선 및 힌트 적용을 통해 통계 시스템의 정확도 및 안정성 향상.
                      </p>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        신규 통계 지표 요구사항 반영 및 시스템 구조 확장을 통한 통계 시스템 기능 고도화.
                      </p>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-4 bg-border dark:bg-gray-700"></div>
                        <p className="font-bold text-foreground">인증시스템 개발</p>
                        <span className="text-muted-foreground">|</span>
                        <p className="text-sm text-muted-foreground">2024년 하반기</p>
                      </div>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        드림시큐리티 표준창 인증 기능을 기존 포털 시스템에 적용하여 인증 체계 도입.
                      </p>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-4 bg-border dark:bg-gray-700"></div>
                        <p className="font-bold text-foreground">청소년 증명서 출력 개선</p>
                        <span className="text-muted-foreground">|</span>
                        <p className="text-sm text-muted-foreground">2024년 중반기</p>
                      </div>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        기존 계산 로직의 오류를 정밀 분석 및 개선하고, 정책 변경에 따라 새로운 조건을 반영한 계산 알고리즘을 재정립하여 시스템의 정확성과 일관성 확보.
                      </p>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        대국민 포탈사이트에 증명서 출력 기능을 신규 추가하여 청소년 증명서 출력 확인 기능을 제공.
                      </p>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-4 bg-border dark:bg-gray-700"></div>
                        <p className="font-bold text-foreground">시스템 운영 및 유지보수</p>
                        <span className="text-muted-foreground">|</span>
                        <p className="text-sm text-muted-foreground">2024년 ~ 2025년 상반기</p>
                      </div>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        사용자 요구사항을 분석하여 프로그램을 수정하고, RFP 기반의 요구 명세에 따라 신규 기능 개발 및 유지보수 업무 수행.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <Separator />
                {/* 동원시스템즈 */}
                <div className="mt-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="bg-background hover:bg-accent text-foreground transition-colors">파견근무</Badge>
                      <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Spring</Badge>
                      <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">JMS</Badge>
                      <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">EAI</Badge>
                      <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">SAP</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Oracle</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">MySQL</Badge>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Image src="/images/logos/dongwon.png" alt="Company 1" width={50} height={50} />
                      </div>
                      <div>
                        <p className="font-bold text-lg">동원시스템즈</p>
                        <p className="text-xs text-gray-500">동원시스템즈 차세대 ERP 구축</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center gap-4">
                        <div className="w-1 h-4 bg-border dark:bg-gray-700"></div>
                        <p className="font-bold text-foreground">ERP 차세대 구축에 대응하는 EAI 구축</p>
                        <span className="text-muted-foreground">|</span>
                        <p className="text-sm text-muted-foreground">2025년 중반기 ~ </p>
                      </div>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        SAP, 외부 시스템, 레거시 DB 등과 연계하기 위한 어댑터 약 350개를 개발하고 테스트를 수행함.
                      </p>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        DB ↔ DB, SAP ↔ DB, SOAP ↔ DB 등 다양한 연계 방식에 대응 가능한 범용 처리 로직과 예외 처리 체계를 구축함.
                      </p>
                      <p className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                        대용량 트랜잭션 처리 및 시스템 간 안정적인 연계를 위해 JMS 기반의 비동기 메시지큐와 ESB 아키텍처를 활용한 메시지 처리 파이프라인을 구축함.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 메타빌드 끝 */}
        </div>
      </div>
    </>
  );
};

export default CareerSection;
