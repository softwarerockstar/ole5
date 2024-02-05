export interface OleStep5CoverageInterface {
    Description: string
}
export interface OleStep5DataInterface {
    isControl: boolean //yearCtrl.isControl
    policyType: string //yearCtrl.policyType
    policyName: string //yearCtrl.sessionInfo.isCon?yearCtrl.conTxt:yearCtrl.policyName
    policyNumber: string //yearCtrl.policyNumber
    underwriterCompany: string //yearCtrl.uwCompany
    ole5Title: string //schoolCtrl.ole5Title
    ole5Content1: string //schoolCtrl.ole5Content1
    ole5Content2: string //schoolCtrl.ole5Content2
    creditDecline: boolean //yearCtrl.creditDecline
    
    recentCoverage: boolean //yearCtrl.recentCoverage
    recentPolicyNumber: string //yearCtrl.recent.policyNumber
    recentSchoolName: string //yearCtrl.recent.schoolName
    recentCampus: string //yearCtrl.recent.campus
    recentProductName: string //yearCtrl.recent.productName
    recentCoverageType: boolean //yearCtrl.underwriteratTopAllowedStates.indexOf(yearCtrl.regulatoryStateCode)>-1 && yearCtrl.recent.coverageType === 'Spouse' ? 'Spouse [or Domestic Partner]' : yearCtrl.recent.coverageType
    recentEffectiveDate: string //yearCtrl.recent.effectiveDate
    recentExpirationDate: string //yearCtrl.recent.expirationDate

    school: string //yearCtrl.school
    productName: string //yearCtrl.sessionInfo.isCon?yearCtrl.conTxt:yearCtrl.policyName

    // Line 75-76

    enrollmentEffectiveDate: string //yearCtrl.enrollmentInfo.effectiveDate
    enrollmentExpirationDate: string //yearCtrl.enrollmentInfo.expirationDate
    enrollmentRateSelectedPeriodCode: string //enrollmentInfo.rateSelected.periodCode
    enrollmentRateSelectedEffectiveDate: string //yearCtrl.enrollmentInfo.rateSelected.effectiveDate
    enrollmentRateSelectedExpirationDate: string //yearCtrl.enrollmentInfo.rateSelected.expirationDate
    

    coverages: OleStep5CoverageInterface[]; //coverage in yearCtrl.coverages



}