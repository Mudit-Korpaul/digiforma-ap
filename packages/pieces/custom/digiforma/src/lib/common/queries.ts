export const digifromaGraphQLQueries = {
	listComapnies: `
  query{
    companies{
            accountingNumber
            ape
            id
            name
            city
            cityCode
            code
            country
            countryCode
            email
            employeesCount
            externalId
            opcaNumber
            phone
            website
        }
    }`,
	searchCompanies: `
    query searchCompanies($date_filters:DateFilter){
        companies(dateFilters:$date_filters)
        {
            accountingNumber
            ape
            id
            name
            city
            cityCode
            code
            siret
            country
            countryCode
            email
            employeesCount
            externalId
            opcaNumber
            phone
            website
            idcc
            insertedAt
            isRlt
            locale
            nace
            note
            opca
            opcaNumber
            phone
            publicOrganization
            rcsCity
            roadAddress
            siret
            updatedAt
            vat
            website
        }
    }`,
	listCustomers: `
  query{
    customers{
        accountingNumber
        contracted
        contractedFundingUnknown
        conventionSigned
        costSalary
        crmStatus
        estimatedTraineeCount
        foreignCustomer
        id
        jobless
        manualBpf
        manualBpfAmount
        manualBpfHours
        manualBpfHoursAmount
        manualBpfOtherAmount
        manualBpfPedagogicalAmount
        manualBpfTraineesAmount
        pipelineState
        qualityExpectations
        qualitySuccessConditions
        specialPrice
        stripeId
        vat
        costs{
            id
            type
            cost
            costMode
        }
        customerFundings{
            id
            amount
            fundingAgreement
            fundingAgency{
                id
                name
            }
        }
        customerTrainees{
            id
        }
        subsessions{
            id
            name
        }
    }
}`,
	searchCustomers: `
        query searchCustomers($date_filters:DateFilter)
        {
        customers(dateFilters:$date_filters){
            accountingNumber
            contracted
            contractedFundingUnknown
            conventionSigned
            costSalary
            crmStatus
            estimatedTraineeCount
            foreignCustomer
            id
            jobless
            manualBpf
            manualBpfAmount
            manualBpfHours
            manualBpfHoursAmount
            manualBpfOtherAmount
            manualBpfPedagogicalAmount
            manualBpfTraineesAmount
            pipelineState
            qualityExpectations
            qualitySuccessConditions
            specialPrice
            stripeId
            vat
            costs{
                id
                type
                cost
                costMode
            }
            customerFundings{
                id
                amount
                fundingAgreement
                fundingAgency{
                    id
                    name
                }
            }
            customerTrainees{
                id
            }
            subsessions{
                id
                name
            }
            updatedAt
            insertedAt
        }
        }`,
	listQuotations: `
  query{
    quotations{
        id
        date
        customer{
            id
        }
        items{
            id
            name
        }
        recipient{
            ...on Company{
                id
                name
            }
            ...on FundingAgency{
                id
                name
            }
            ...on Trainee{
                id
                firstname
                lastname
            }
        }
        trainingSession{
            id
            name
        }
    }
}`,
	listTrainees: `
  query{
    trainees{
        academyId
        accountingNumber
        birthCity
        birthCityCode
        birthName
        birthRegion
        birthdate
        city
        cityCode
        civility
        code
        company{
            id
            name
        }
        companyId
        companyName
        country
        countryCode
        dpcAdeli
        dpcMainStatus
        dpcRpps
        draft
        email
        externalId
        firstname
        freeText
        grades{
            id
            label
            scoreResult
        }
        handicaped
        hourlySalary
        id
        insertedAt
        isPartialUnemployment
        isSexualHarassmentVictim
        isTerrorismVictim
        lastDiploma
        lastname
        levelStudies
        locale
        logo{
            id
            filename
        }
        nationality
        note
        phone
        phoneSecondary
        position
        profession
        professionalCategory
        roadAddress
        siret
        socialCategory
        socialNumber
        status
        updatedAt
        vat
        vatAccountingCode
        workContractType

    }

  }`,
	searchTrainees: `
    query searchTrainees($date_filters:DateFilter)
    {
        trainees(dateFilters:$date_filters)
        {
            academyId
            accountingNumber
            birthCity
            birthCityCode
            birthName
            birthRegion
            birthdate
            city
            cityCode
            civility
            code
            company{
                id
                name
            }
            companyId
            companyName
            country
            countryCode
            dpcAdeli
            dpcMainStatus
            dpcRpps
            draft
            email
            externalId
            firstname
            freeText
            grades{
                id
                label
                scoreResult
            }
            handicaped
            hourlySalary
            id
            insertedAt
            isPartialUnemployment
            isSexualHarassmentVictim
            isTerrorismVictim
            lastDiploma
            lastname
            levelStudies
            locale
            logo{
                id
                filename
            }
            nationality
            note
            phone
            phoneSecondary
            position
            profession
            professionalCategory
            roadAddress
            siret
            socialCategory
            socialNumber
            status
            updatedAt
            vat
            vatAccountingCode
            workContractType
        }
    }`,
	listPrograms: `
  query{
    programs{
            accessDelay
            id
            name
            name
            accessDelayUnit
            accountingAnalytics
            rsCode
            rncpCode
            economicalModel
            
            durationInDays
            durationInHours
            version
            onSale
            certifInfoCode
            accountingNumber
            accountingNumberFundingAgency
            cpfCode
            admissionModality
            code
            category{
                id
                name
            }
            assessments{
                sourceId
                text
            }
            certificateurContratId
            certificateurId
            certificationDetails
            certificationIncludedInAdditionalExpenses
            certificationModalityAccess
            certificationModality
            certificationRegistrationDate
            certificationType
            certifiedData
            certifierName
            code
            cpf
            cpfCode
            createdAt
            description
            diploma
            diplomaName
            diplomaTitle
            documents{
                id
                filename
            }
            dpc
            durationInDays
            economicalModel
            enrollingLevelEnforced
            entryExitModality
            graduatedLevel
            graduationModality
            graduationTarget
            graduationValidityYears
            youtubeId
            version
            updatedAt
            transmitterCertificationId
            trainingType
            trainingPedagogicalModality
            trainingModality
            tailored
            subtitle
            rythm
            targets{
                sourceId
                text
            }
            steps{
                sourceId
                text
            }
            tags{
                name
            }
            trainingType
            targets{
                text
            }
            youtubeId
            pedagogicalResources{
                sourceId
                text
            }
            graduationTarget
            prerequisites{
                sourceId
                text
            }
            goals{
                sourceId
                text
            }
    }
}`,
	searchPrograms: `
        query seachPrograms($date_filters:DateFilter)
        {
        programs(DateFilters:$date_filters)
        {
                accessDelay
                id
                name
                name
                accessDelayUnit
                accountingAnalytics
                rsCode
                rncpCode
                economicalModel
                
                durationInDays
                durationInHours
                version
                onSale
                certifInfoCode
                accountingNumber
                accountingNumberFundingAgency
                cpfCode
                admissionModality
                code
                category{
                    id
                    name
                }
                assessments{
                    sourceId
                    text
                }
                certificateurContratId
                certificateurId
                certificationDetails
                certificationIncludedInAdditionalExpenses
                certificationModalityAccess
                certificationModality
                certificationRegistrationDate
                certificationType
                certifiedData
                certifierName
                code
                cpf
                cpfCode
                createdAt
                description
                diploma
                diplomaName
                diplomaTitle
                documents{
                    id
                    filename
                }
                dpc
                durationInDays
                economicalModel
                enrollingLevelEnforced
                entryExitModality
                graduatedLevel
                graduationModality
                graduationTarget
                graduationValidityYears
                youtubeId
                version
                updatedAt
                transmitterCertificationId
                trainingType
                trainingPedagogicalModality
                trainingModality
                tailored
                subtitle
                rythm
                targets{
                    sourceId
                    text
                }
                steps{
                    sourceId
                    text
                }
                tags{
                    name
                }
                trainingType
                targets{
                    text
                }
                youtubeId
                pedagogicalResources{
                    sourceId
                    text
                }
                graduationTarget
                prerequisites{
                    sourceId
                    text
                }
                goals{
                    sourceId
                    text
                }
        }
        }`,
	listInstructors: `
    query{
        instructors{
        academyId
        accountingNumber
        bio
        birthCity
        birthName
        birthRegion
        birthdate
        city
        cityCode
        civility
        code
        company
        contractAccepted
        cost
        country
        countryCode
        diploma
        dpcAdeli
        dpcRpps
        email
        externalId
        firstname
        id
        insertedAt
        instructorLegalNumber
        insurance
        lastname
        locale
        logo{
            id
            filename
        }
        nationality
        note
        phone
        profession
        roadAddress
        siret
        skills
        socialNumber
        status
        updatedAt
        vat
        }
    }`,
	searchInstructors: `
    query searchInstructors($date_filters:DateFilter)
        {
        instructors(dateFilters:$date_filters)
        {
            academyId
            accountingNumber
            bio
            birthCity
            birthName
            birthRegion
            birthdate
            city
            cityCode
            civility
            code
            company
            contractAccepted
            cost
            country
            countryCode
            diploma
            dpcAdeli
            dpcRpps
            email
            externalId
            firstname
            id
            insertedAt
            instructorLegalNumber
            insurance
            lastname
            locale
            logo{
                id
                filename
            }
            nationality
            note
            phone
            profession
            roadAddress
            siret
            skills
            socialNumber
            status
            updatedAt
            vat
        }
    }`,
	listFundingAgencies: `
    query{
        fundingAgencies{
            accountingNumber
            city
            cityCode
            code
            country
            countryCode
            email
            externalId
            id
            insertedAt
            locale
            name
            note
            phone
            roadAddress
            siret
            type
            updatedAt
            trainingSessions{
                id
                name
            }
        }
    }`,
	searchFundingAgencies: `
    query searchFundingAgencies($date_filters:DateFilter)
    {
        fundingAgencies($DateFilters:$date_filters)
        {
            accountingNumber
            city
            cityCode
            code
            country
            countryCode
            email
            externalId
            id
            insertedAt
            locale
            name
            note
            phone
            roadAddress
            siret
            type
            updatedAt
            trainingSessions{
                id
                name
            }
        }
    }`,
	listTrainingSessions: `
    query{
        trainingSessions{
            id
            name
            academy{
                id
                contactEmail
            }
            address
            addressName
            attendanceId
            baseDocuments{
                id
                filename
            }
            cityCode
            code
            codeFundae
            comments{
                id
                author
                text
            }
            contracted
            costs{
                id
                cost
                costMode
                description
                type
                vat
            }
            customName
            customers{
                id
            }
            dates{
                date
                startTime
                endTime
                slot
            }
            datesGoogleUrl
            datesWebcalUrl
            diploma
            diplomaTitle
            dpc
            endDate
            
        }
    
    }`,
	searchTrainingSessions: `
    query searchTrainingSessions($date_filters:DateFilter)
    {
        trainingSessions(dateFilters:$date_filters)
        {
            id
            name
            academy{
                id
                contactEmail
            }
            address
            addressName
            attendanceId
            baseDocuments{
                id
                filename
            }
            cityCode
            code
            codeFundae
            comments{
                id
                author
                text
            }
            contracted
            costs{
                id
                cost
                costMode
                description
                type
                vat
            }
            customName
            customers{
                id
            }
            dates{
                date
                startTime
                endTime
                slot
            }
            datesGoogleUrl
            datesWebcalUrl
            diploma
            diplomaTitle
            dpc
            endDate
            updatedAt
            insertedAt
        }
    }
    `,
	listTraineesInTrainingSession: `
  query listTraineesInTrainingSession($session_id:ID!)
  {
      trainingSession(id:$session_id)
      {
          trainees{
              academyId
              accountingNumber
              id
              firstname
              lastname
              birthCity
              birthCityCode
              birthdate
              birthName
              city
              cityCode
              civility
              companyId
              country
              countryCode
              email
              locale
          }
      }
  }`,
	listTraineeGrades: `
    query listTraineeGrades($trainee_id:ID!){
        trainee(id:$trainee_id){
            grades{
                id
                label
                scoreComment
                scoreResult
            }
        }
    }`,
	listCustomersInTrainingSession: `
  query listCustomersInTrainingSession($session_id:ID!)
  {
    trainingSession(id:$session_id)
    {
        customers{
            id
            entity{
                __typename
                ...on Trainee{
                id
                firstname
                lastname
            }
            ...on Company{
                name
            }
            }
            customerFundings{
                id
                amount
                fundingAgreement
                fundingAgency{
                    id
                    name
                }
    
            }
        }
    }
  }`,
	listAllCustomerInTrainingSession: `
  query listAllCustomerInTrainingSession($session_id:ID!)
  {
    trainingSession(id:$session_id)
    {
        customers{
            id
            entity{
                ...on Trainee{
                id
                firstname
                lastname
            }
            }
        }
    }
  }`,
	listInstructorsInTrainingSession: `
  query listInstructorsInTrainingSession($session_id:ID!)
  {
    trainingSession(id:$session_id)
    {
        trainingSessionInstructors{
            id
            instructor{
                firstname
                lastname
            }
        }
    }
  }`,
	listInvoices: `
    query{
        invoices{
            id
            accountingAnalytics
            date
            freeText
            insertedAt
            items{
                id
                vat
                quantity
                type
                description
                unitPrice
            }
            number
            prefix
        }
    }`,
	listInvoicePayments: `
    query listInvoicePayments($invoice_id:ID!)
    {
        invoice(id:$invoice_id)
        {
            invoicePayments{
                id
                freeText
                stripeId
                mode
                amount
            }
        }
    }`,
	listProgramCategories: `
    query{
        programCategories{
            id
            color
            name
        }
    }`,
	listContacts: `
    query listContacts($company_id:ID!)
    {
        company(id:$company_id)
        {
            contacts
            {
                id
                firstname
                lastname
                fax
                title
                email
                phone
                position
            }
        }
    }`,
	listTrainingSubSessions: `
    query listTrainingSubSessions($session_id:ID!)
    {
        trainingSession(id:$session_id)
        {
            subsessions{
                id
                name
                trainingSessionSlots
                {
                    id
                    endTime
                    startTime
                    slot
                    date
                }
                
            }
        }
    }`,
	listProgramDiplomas: `
    query listProgramDiplomas
    {
        programDiplomas
        {
            code
            name
        }
    }`,
	listProgramSpecialties: `
    query listProgramSpecialties
    {
        programSpecialties
        {
            code
            name
        }
        
    }`,
	listManagers: `
    query lisManagers{
        managers
        {
            id
            firstname
            lastname
            email
            type
        }
    }`,
	listMarketplaceCategories: `
  query listMarketplaceCategories{
        marketplaceCategories{
            id
            name
        }
    }`,
	listRooms: `
    query{
        rooms{
            id
            name
        }
    }`,
};
