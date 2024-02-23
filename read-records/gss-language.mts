import gssLanguage from '@gss-llc/gss-language.gss.ge';

class GSS_Language {
    private static registered: any;

    static gssLanguage(): any {
        if (!GSS_Language.registered) {
            gssLanguage.registerMlStrings({
                // ზოგადი
                Georgian: {
                    ka: 'ქართული',
                    en: 'Georgian',
                    ru: 'Грузинский'
                },
                Russian: {
                    ka: 'რუსული',
                    en: 'Russian',
                    ru: 'русский'
                },
                English: {
                    ka: 'ინგლისური',
                    en: 'English',
                    ru: 'Английский'
                },
                or: {
                    ka: 'ან',
                    en: 'or',
                    ru: 'или'
                },
                error: {
                    ka: 'შეცდომა',
                    en: 'Error',
                    ru: 'Ошибка'
                },
                information: {
                    ka: 'შეტყობინება',
                    en: 'Information',
                    ru: 'Информация'
                },
                Comment: {
                    ka: 'კომენტარი',
                    en: 'Comment',
                    ru: 'Комментарий'
                },
                somethingWentWrong: {
                    ka: "რაღაც არ მოხდა საჭიროებისამებრ!\nჩვენ უკვე შევიტყვეთ ამის შესახებ და ვმუშაობთ,\nრომ გამოსწორდეს რაც შეიძლება სწრაფად\nცადეთ ხელახლა მოგვიანებით",
                    en: "Something went wrong.\nWe're working on getting it fixed as soon as we can\nTry again later",
                    ru: "Произошла ошибка.\n\nМы уже узнали об этом и работаем,\nчтобы исправить как можно скорее\nПовторите попытку позже"
                },
                econnrefused: {
                    ka: '{0} - სერვისების მოწოდება დროებით შეზღუდულია',
                    en: '{0} - provision of services is temporarily restricted',
                    ru: '{0} - предоставление услуг временно ограниченo'
                },
                unauthorizedRequest: {
                    ka: '{0}\nმოთხოვნა არ არის ავტორიზირებული',
                    en: '{0}\nRequest is not authorized',
                    ru: '{0}\nЗапрос не авторизован'
                },
                forbiddenRequest: {
                    ka: '{0}\nმოთხოვნა არის აკრძალული',
                    en: '{0}\nRequest is forbidden',
                    ru: '{0}\nЗапрос запрещен'
                },
                resourceNotFound: {
                    ka: '{0}\nარ არის ხელმისაწვდომი ან მითითებული პარამეტრების შესაბამისი რესურსი წაშლილია.',
                    en: '{0}\nis not available or the resource with the specified parameters is deleted.',
                    ru: '{0}\nнедоступно или соответствующий ресурс указанных параметров удалён.'
                },
                // -- ზევით არსებული ეს ჩამონათვალი არის exception.gss.ge - აქ მაქვს გადმოტანილი რომ ანგულარის ცლასებსაც ქონდეთ წვდომა
                yes: {
                    ka: 'კი',
                    en: 'Yes',
                    ru: 'Да'
                },
                no: {
                    ka: 'არა',
                    en: 'No',
                    ru: 'Нет'
                },
                all: {
                    ka: 'ყველა',
                    en: 'All',
                    ru: 'Все'
                },

                save: {
                    ka: 'შენახვა',
                    en: 'Save',
                    ru: 'Сохранить'
                },
                cancel: {
                    ka: 'უარყოფა',
                    en: 'Cancel',
                    ru: 'Отменить'
                },
                close: {
                    ka: 'დახურვა',
                    en: 'Close',
                    ru: 'Закрыть'
                },
                closed: {
                    ka: 'დახურულია',
                    en: 'Closed',
                    ru: 'Закрыто'
                },
                closing: {
                    ka: 'დახურვა',
                    en: 'Closing',
                    ru: 'Закрытие'
                },
                execute: {
                    ka: 'შესრულება',
                    en: 'Execute',
                    ru: 'Выполнять'
                },
                ok: {
                    ka: 'თანხმობა',
                    en: 'Ok',
                    ru: 'Хорошо'
                },
                print: {
                    ka: 'დაბეჭდვა',
                    en: 'Print',
                    ru: 'Распечатать'
                },
                create: {
                    ka: "შექმნა",
                    en: "Create",
                    ru: "Создать"
                },
                delete: {
                    ka: 'წაშლა',
                    en: 'Delete',
                    ru: 'Удалить'
                },
                deleteAll: {
                    ka: 'წაშალე ყველა',
                    en: 'Delete all',
                    ru: 'Удалить все'
                },
                restore: {
                    ka: 'აღდგენა',
                    en: 'Restore',
                    ru: 'Восстановление'
                },
                restoreAllDeleted: {
                    ka: 'აღადგინე ყველა წაშლილი',
                    en: 'Restore all deleted',
                    ru: 'Восстановить все удаленное'
                },
                new: {
                    ka: 'ახალი',
                    en: 'New',
                    ru: 'Новый'
                },
                add: {
                    ka: 'დამატება',
                    en: 'Add',
                    ru: 'Добавить'
                },
                addSelected: {
                    ka: 'მონიშნულის დამატება',
                    en: 'Add selected',
                    ru: 'Добавить отмеченное'
                },
                upload: {
                    ka: "ატვირთვა",
                    en: "Upload",
                    ru: "Загрузка"
                },
                syncUpload: {
                    ka: "სინქრონიზაცია-ატვირთვა",
                    en: "Synchronize-Upload",
                    ru: "Синхронизация-Загрузка"
                },
                edit: {
                    ka: 'რედაქტირება',
                    en: 'Edit',
                    ru: 'Редактировать'
                },
                details: {
                    ka: 'დეტალები',
                    en: 'Details',
                    ru: 'Редактировать'
                },
                refresh: {
                    ka: 'განახლება',
                    en: 'Refresh',
                    ru: 'Обновление'
                },
                needRefresh: {
                    ka: 'გასაახლებელი',
                    en: 'Need to refresh',
                    ru: 'Нужно обновить'
                },
                needToClarify: {
                    ka: 'გასარკვევი',
                    en: 'Need to clarify',
                    ru: 'Нужно Выяснить'
                },
                updated: {
                    ka: 'განახლდა',
                    en: 'Updated',
                    ru: 'Обновлен'
                },
                Exit: {
                    ka: 'გამოსვლა',
                    en: 'Exit',
                    ru: 'Выход'
                },
                number: {
                    ka: 'ნომერი',
                    en: 'Number',
                    ru: 'Номер'
                },
                EMail: {
                    ka: 'ელ. ფოსტა',
                    en: 'Email',
                    ru: 'Эл. адрес'
                },
                eMails: {
                    ka: 'ელ. ფოსტ(ებ)ი',
                    en: 'Emails\'',
                    ru: 'Эл. адрес(а)'
                },
                gMails: {
                    ka: 'გუგლის ელ. ფოსტ(ებ)ი',
                    en: 'Google emails\'',
                    ru: 'Эл. адрес(а) Google'
                },
                name: {
                    ka: 'სახელი',
                    en: 'Name',
                    ru: 'Название'
                },
                surname: {
                    ka: 'გვარი',
                    en: 'Surname',
                    ru: 'Фамилия'
                },
                contactName: {
                    ka: 'საკონტაქტო სახელი',
                    en: 'Contact Name',
                    ru: 'Контактное Имя'
                },
                personalNumber: {
                    ka: 'პირადი ნომერი',
                    en: 'Personal Number',
                    ru: 'Персональный Номер'
                },
                subject: {
                    ka: 'თემა',
                    en: 'Subject',
                    ru: 'Тема'
                },
                type: {
                    ka: 'ტიპი',
                    en: 'Type',
                    ru: 'Тип'
                },
                chooseType: {
                    ka: 'აირჩიეთ ტიპი',
                    en: 'Choose Type',
                    ru: 'Выберите тип'
                },
                chooseFrequency: {
                    ka: 'აირჩიეთ სიხშირე',
                    en: 'Choose frequency',
                    ru: 'Выберите частоту'
                },
                code: {
                    ka: 'კოდი',
                    en: 'Code',
                    ru: 'Код'
                },
                barCode: {
                    ka: 'შტრიხკოდი',
                    en: 'Barcode',
                    ru: 'Штрих-код'
                },
                Dimension: {
                    ka: 'განზომილება',
                    en: 'Dimension',
                    ru: 'Измерение'
                },
                Dimensions: {
                    ka: 'განზომილებები',
                    en: 'Dimensions',
                    ru: 'Измерения'
                },
                group: {
                    ka: 'ჯგუფი',
                    en: 'Group',
                    ru: 'Группа'
                },
                priceInAllStock: {
                    ka: 'ყველა საწყობის ფასი',
                    en: 'Price of all warehouses',
                    ru: 'Цена всех складов'
                },
                priceInStock: {
                    ka: 'id-1-ფასი-საწყობი',
                    en: 'id-{0}-price-{1}',
                    ru: 'id-{0}-цена-{1}'
                },
                minAmountInStock: {
                    ka: 'id-1-მინიმალური რაოდენობა-საწყობი',
                    en: 'id-{0}-Minimal amount-{1}',
                    ru: 'id-{0}-Минимальное количество-{1}'
                },
                minAmountInAllStock: {
                    ka: 'ყველა საწყობის მინიმალური რაოდენობა',
                    en: 'Minimal amount of all warehouses',
                    ru: 'Минимальное количество всех складов'
                },
                isActive: {
                    ka: 'აქტიურია',
                    en: 'Active',
                    ru: 'Активная'
                },
                reports: {
                    ka: 'ანგარიშგებები',
                    en: 'Reports',
                    ru: 'Отчеты'
                },
                options: {
                    ka: 'პარამეტრები',
                    en: 'Options',
                    ru: 'Параметры'
                },
                instructions: {
                    ka: 'ინსტრუქციები',
                    en: 'Instructions',
                    ru: 'Инструкции'
                },
                videoInstructions: {
                    ka: 'ვიდეო ინსტრუქციები',
                    en: 'Video instructions',
                    ru: 'Видео инструкции'
                },
                logout: {
                    ka: 'გამოსვლა',
                    en: 'Logout',
                    ru: 'Выйти'
                },
                choose: {
                    ka: 'აირჩიეთ',
                    en: 'Choose',
                    ru: 'Выбери'
                },
                select: {
                    ka: 'არჩევა',
                    en: 'Select',
                    ru: 'Выбрать'
                },
                selectAll: {
                    ka: 'აირჩიე ყველა',
                    en: 'Select all',
                    ru: 'Выбрать все'
                },
                environment: {
                    ka: 'გარემო',
                    en: 'Environment',
                    ru: 'Среда'
                },
                search: {
                    ka: 'ძებნა',
                    en: 'Search',
                    ru: 'Поиск'
                },
                continueSearch: {
                    ka: 'გაგრძელდეს ძებნა',
                    en: 'Continue Search',
                    ru: 'Продолжить поиск'
                },
                more: {
                    ka: 'მეტი',
                    en: 'More',
                    ru: 'Больше'
                },
                Except: {
                    ka: 'გარდა',
                    en: 'Except',
                    ru: 'Кроме'
                },
                export: {
                    ka: 'ექსპორტი',
                    en: 'Export',
                    ru: 'Экспорт'
                },
                download: {
                    ka: 'ჩამოტვირთვა',
                    en: 'Download',
                    ru: 'Скачать'
                },
                downloaded: {
                    ka: 'ჩამოიტვირთა',
                    en: 'Downloaded',
                    ru: 'Скачано'
                },
                _download: {
                    ka: 'ჩამოტვირთე',
                    en: 'Download',
                    ru: 'Скачать'
                },
                notDownloaded: {
                    ka: 'არ ჩამოიტვირთა',
                    en: 'Not Downloaded',
                    ru: 'Не скачано'
                },
                country: {
                    ka: 'ქვეყანა',
                    en: 'Country',
                    ru: 'Страна'
                },
                countries: {
                    ka: 'ქვეყანები',
                    en: 'Countries',
                    ru: 'Страны'
                },
                chooseCountry: {
                    ka: 'აირჩიეთ ქვეყანა',
                    en: 'Choose country',
                    ru: 'Выберите страну'
                },
                added: {
                    ka: 'დამატებული',
                    en: 'Added',
                    ru: 'Добовленный'
                },
                viewed: {
                    ka: 'ნანახი',
                    en: 'Viewed',
                    ru: 'Посмотренный'
                },
                searched: {
                    ka: 'უკვე მოძებნილი',
                    en: 'Searched',
                    ru: 'Найденный'
                },
                allResults: {
                    ka: 'ყველა შედეგი',
                    en: 'All Results',
                    ru: 'Все результаты'
                },
                searchInstruction: {
                    ka: 'ძებნის ინსტრუქცია',
                    en: 'Search instruction',
                    ru: 'Инструкция по поиску'
                },
                instructionsForModifiedDocuments: {
                    ka: 'წაშლილი და შეცვლილი საბუთები',
                    en: 'Deleted and Modified Documents',
                    ru: 'Удаленные и Измененные Документы'
                },
                instructionsForAddingDataToAccount: {
                    ka: 'ანგარიშზე მონაცემების დამატების ინსტრუქცია',
                    en: 'Instructions for adding data to account',
                    ru: 'Инструкция по добавлению данных на счет'
                },
                instructionsForUploadingInvoices01: {
                    ka: 'ანგარიშ-ფაქტურების ატვირთვა',
                    en: 'Uploading Invoices',
                    ru: 'Загрузка Счетов-фактур'
                },
                instructionsForUploadingInvoices02: {
                    ka: 'ანგარიშ-ფაქტურების ატვირთვის ინსტრუქცია',
                    en: 'Instructions for uploading invoices',
                    ru: 'Инструкции по загрузке счетов-фактур'
                },
                import: {
                    ka: 'იმპორტი',
                    en: 'Import',
                    ru: 'Импорт'
                },
                imported: {
                    ka: 'დაიმპორტირდა',
                    en: 'Imported',
                    ru: 'Импортирован'
                },
                notImported: {
                    ka: 'არ დაიმპორტირდა',
                    en: 'Not imported',
                    ru: 'Не импортирован'
                },
                checkConnection: {
                    ka: 'კავშირის შემოწმება',
                    en: 'Check connection',
                    ru: 'Проверить соединение'
                },
                checkConnectionAndData: {
                    ka: 'კავშირის და მონაცემების შემოწმება',
                    en: 'Check connection and data',
                    ru: 'Проверить соединение и данные'
                },
                connected: {
                    ka: 'დაკავშირებულია',
                    en: 'Connected',
                    ru: 'Соединенный'
                },
                notConnected: {
                    ka: 'არ არის დაკავშირებული',
                    en: 'Not connected',
                    ru: 'Не соединенный'
                },
                bankNotConnected: {
                    ka: 'არ მყარდება ბანკთან კავშირი',
                    en: 'No connection with the bank is established',
                    ru: 'Связи с банком не установлено'
                },
                position: {
                    ka: 'პოზიცია',
                    en: 'Position',
                    ru: 'Позиция'
                },
                line: {
                    ka: 'სტრიქონი',
                    en: 'Line',
                    ru: 'строка'
                },
                note: {
                    ka: 'შენიშვნა',
                    en: 'Note',
                    ru: 'Заметка'
                },
                archive: {
                    ka: 'არქივი',
                    en: 'Archive',
                    ru: 'Aрхив'
                },
                toArchive: {
                    ka: 'დაარქივება',
                    en: 'To archive',
                    ru: 'Архивировать'
                },
                unArchive: {
                    ka: 'არქივიდან აღდგენა',
                    en: 'Unarchive',
                    ru: 'Разархивировать'
                },
                duplicate: {
                    ka: 'დუბლირება',
                    en: 'Duplicate',
                    ru: 'Дублировать'
                },
                showArchive: {
                    ka: 'არქივის ჩვენება',
                    en: 'Show archive',
                    ru: 'Показать архив'
                },
                accomplishment: {
                    ka: 'შესრულება',
                    en: 'Accomplishment',
                    ru: 'Выполнение'
                },
                Description: {
                    ka: 'აღწერა',
                    en: 'Description',
                    ru: 'Описание'
                },
                Support: {
                    ka: 'მხარდაჭერა',
                    en: 'Support',
                    ru: 'Поддержка'
                },
                Profile: {
                    ka: 'პროფილი',
                    en: 'Profile',
                    ru: 'Профиль'
                },
                Phone: {
                    ka: 'ტელეფონი',
                    en: 'Phone',
                    ru: 'Телефон'
                },
                Mobile: {
                    ka: 'მობილური',
                    en: 'Mobile',
                    ru: 'Мобильный'
                },
                Unit: {
                    ka: 'ცალი',
                    en: 'Unit',
                    ru: 'Штука'
                },
                Information: {
                    ka: 'ინფორმაცია',
                    en: 'Information',
                    ru: 'Информация'
                },
                AdditionalInformation: {
                    ka: 'დამატებითი ინფორმაცია',
                    en: 'Additional information',
                    ru: 'Дополнительная информация'
                },
                version: {
                    ka: 'ვერსია',
                    en: 'Version',
                    ru: 'Версия'
                },
                linkVersion: {
                    ka: 'კავშირის ვერსია',
                    en: 'Connection version',
                    ru: 'Версия подключения'
                },
                // კალენდარი
                monthsFullArray: {
                    ka: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
                    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь']
                },
                monthsShortArray: {
                    ka: ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'],
                    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    ru: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                },
                weekdaysFullArray: {
                    ka: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'],
                    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                },
                weekdaysShortArray: {
                    ka: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'],
                    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    ru: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
                },
                weekdaysLetterArray: {
                    ka: ['კ', 'ო', 'ს', 'ო', 'ხ', 'პ', 'შ'],
                    en: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    ru: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
                },
                Day: {
                    en: 'Day',
                    ka: 'დღე',
                    ru: 'День',
                },
                Week: {
                    en: 'Week',
                    ka: 'კვირა',
                    ru: 'Неделя',
                },
                Month: {
                    en: 'Month',
                    ka: 'თვე',
                    ru: 'Месяц',
                },
                Year: {
                    en: 'Year',
                    ka: 'წელი',
                    ru: 'Год',
                },
                today: {
                    en: 'Today',
                    ka: 'დღეს',
                    ru: 'Сегодня',
                },
                clear: {
                    en: 'Clear',
                    ka: 'გასუფთავება',
                    ru: 'Очистить'
                },
                date: {
                    ka: 'თარიღი',
                    en: 'Date',
                    ru: 'Дата'
                },
                time: {
                    ka: 'დრო',
                    en: 'Time',
                    ru: 'Время'
                },
                selectDate: {
                    ka: 'თარიღის არჩევა',
                    en: 'Select date',
                    ru: 'Выберите дату'
                },
                period: {
                    ka: 'პერიოდი',
                    en: 'Period',
                    ru: 'Период'
                },
                result: {
                    ka: 'შედეგი',
                    en : 'Result',
                    ru : 'Результат'
                },
                selectPeriodStart: {
                    ka: 'პერიოდის დასაწყისის არჩევა',
                    en: 'Select period start',
                    ru: 'Выберите начало периода'
                },
                selectPeriodEnd: {
                    ka: 'პერიოდის ბოლოს არჩევა',
                    en: 'Select period end',
                    ru: 'Выберите конец периода'
                },
                notCorrectPeriodStart: {
                    ka: 'პერიოდის დასაწყისი არასწორია',
                    en: 'The start of the period is incorrect',
                    ru: 'Начало периода неверно'
                },
                notCorrectPeriodEnd: {
                    ka: 'პერიოდის ბოლო არასწორია',
                    en: 'The end of the period is incorrect',
                    ru: 'Конец периода неверно'
                },
                datePeriodsArray: {
                    ka: ['დღეს', 'გუშინ', 'მიმდინარე კვირა', 'წინა კვირა', 'მიმდინარე თვე', 'წინა თვე', 'მიმდინარე კვარტალი', 'წინა კვარტალი', 'მიმდინარე წელი', 'წინა წელი'],
                    en: ['Today', 'Yesterday', 'Current week', 'Previous week', 'Current month', 'Previous month', 'Current quarter', 'Previous quarter', 'Current year', 'Previous year'],
                    ru: ['Сегодня', 'Вчера', 'Текущая неделя', 'Предыдущая неделя', 'Текущий месяц', 'Предыдущий месяц', 'Текущий квартал', 'Предыдущий квартал', 'Текущий год', 'Предыдущий год']
                },

                // ზოგადი შეტყობინებები
                currencyNotSupported: {
                    ka: '{0} - ვალუტა არ არის მხარდაჭერილი',
                    en: '{0} - currency not supported',
                    ru: '{0} - валюта не поддерживается'
                },
                recordNotFound: {
                    ka: 'ჩანაწერი არ მოიძებნა',
                    en: 'Record not Found',
                    ru: 'Запись не найдена'
                },
                recordAlreadyExist: {
                    ka: 'ჩანაწერი უკვე არსებობს',
                    en: 'Record already exists',
                    ru: 'Запись уже существует'
                },
                recordUpdateCancelChanges: {
                    ka: 'შეინახეთ ან უარყავით - <strong>გახსნილი შეცვლილი ჩანაწერი</strong>',
                    en: 'Save or Reject - <strong>opened changed entry</strong>',
                    ru: 'Сохраните или Отклоните - <strong>открытую измененную запись</strong>'
                },
                formIsInvalid: {
                    ka: 'შეტანილი ინფორმაცია არაკორექტულია! გთხოვთ დააზუსტოთ',
                    en: 'Entered Information is incorrect! Please specify',
                    ru: 'Введенная информация неверна! Пожалуйста уточните'
                },
                recordIsDeleted: {
                    ka: 'ჩანაწერი წაშლილია',
                    en: 'Record is deleted',
                    ru: 'Запись удалена'
                },
                recordUpdating: {
                    ka: 'მიმდინარეობს ჩანაწერის განახლება',
                    en: 'Record update is in progress',
                    ru: 'Запись в процессе обновления'
                },
                recordDeleting: {
                    ka: 'მიმდინარეობს ჩანაწერის წაშლა',
                    en: 'Record deleting is in progress',
                    ru: 'Запись в процессе удаления'
                },
                recordUpdatingError: {
                    ka: 'შეცდომა ჩანაწერის შენახვისას',
                    en: 'Error while saving record',
                    ru: 'Ошибка при сохранении записи'
                },
                recordDeletingError: {
                    ka: 'შეცდომა ჩანაწერის წაშლის დროს',
                    en: 'Error while deleting record',
                    ru: 'Ошибка при удалении записи'
                },
                recordUsedError: {
                    ka: 'ჩანაწერი გამოიყენება, მისი წაშლა შეუძლებელია',
                    en: 'Record is being used, unable to delete it',
                    ru: 'Запись используется, невозможно ее удалить'
                },
                unsupportedWebBrowser: {
                    ka: 'თქვენ ვებბრაუზერს არ აქვს ამ ოპერაციის მხარდაჭერა',
                    en: 'Your web browser does not support this operation',
                    ru: 'Ваш веб-браузер не поддерживает эту операцию'
                },
                discardChanges: {
                    ka: 'გაუქმდეს ცვლილებები?',
                    en: 'Discard changes?',
                    ru: 'Отменить изменения?'
                },
                User: {
                    ka: 'მომხმარებელი',
                    en: 'User',
                    ru: 'Пользователь'
                },
                Users: {
                    ka: 'მომხმარებლები',
                    en: 'Users',
                    ru: 'Пользователи'
                },
                address: {
                    ka: 'მისამართი',
                    en: 'Address',
                    ru: 'Адрес'
                },
                Juridical: {
                    ka: 'იურიდიული',
                    en: 'Legal',
                    ru: 'Юридический'
                },
                Factual: {
                    ka: 'ფაქტიური',
                    en: 'Physical',
                    ru: 'Фактический'
                },
                City: {
                    ka: 'ქალაქი',
                    en: 'City',
                    ru: 'Город'
                },
                Village: {
                    ka: 'სოფელი',
                    en: 'Village',
                    ru: 'Деревня'
                },
                Region: {
                    ka: 'რეგიონი',
                    en: 'Region',
                    ru: 'Область'
                },
                District: {
                    ka: 'რაიონი',
                    en: 'District',
                    ru: 'Район'
                },
                State: {
                    ka: 'შტატი',
                    en: 'State',
                    ru: 'Штат'
                },
                ZipCode: {
                    ka: 'საფოსტო კოდი',
                    en: 'Zip code',
                    ru: 'Почтовый индекс'
                },
                Overview: {
                    ka: 'მიმოხილვა',
                    en: 'Overview',
                    ru: 'Обзор'
                },
                canceled: {
                    ka: 'გაუქმებული',
                    en: 'cancelled',
                    ru: 'отменена'
                },
                userIsNotRegistered: {
                    ka: 'მომხმარებელი არ არის რეგისტრირებული',
                    en: 'User is not registered',
                    ru: 'Пользователь не зарегистрирован'
                },
                userNotAllowForLink: {
                    ka: 'მომხმარებელს {0} არ აქვს წვდომა ბმულზე:\n{1}',
                    En: 'User {0} does not have access to the link:\n{1}',
                    Ru: 'У пользователя {0} нет доступа к ссылке:\n{1}'
                },
                specifyCondition: {
                    ka: 'დააზუსტეთ საძებნი პირობები, სხვა მსგავსი ჩანაწერების გამოსაჩენად',
                    en: 'Specify the search terms, to show the other similar records',
                    ru: 'Уточните условия поиска, чтобы показать другие похожие записи'
                },
                tooManyConditions: {
                    ka: 'საძებნი პირობების რაოდენობა აჭარბებს დასაშვებს\nგთხოვთ შეამციროთ პირობები',
                    en: 'Number of searching terms exceeds the limit\nPlease reduce the terms',
                    ru: 'Количество условия поиска, превышает лимит\nПожалуйста, уменьшите условия'
                },
                home: {
                    ka: 'საწყისი',
                    en: 'Home',
                    ru: 'Главная'
                },
                desktop: {
                    ka: 'სამუშაო მაგიდა',
                    en: 'Desktop',
                    ru: 'Рабочий стол'
                },
                importStarted: {
                    ka: 'იმპორტირება დაიწყო\n{0} - ელ. ფოსტის მისამართზე ინფორმაციას მიიღებთ მოგვიანებით',
                    en: 'Importing has started\ninformation will be sent to the email address - {0} - later',
                    ru: 'Началось импортирование\nна - информация будет отправлена на адрес электронной почты - {0} позже'
                },
                excelCanNotFindSheet: {
                    ka: 'Excel ფაილში არ მოიძებნა შემდეგი დასახელებების არც ერთი ჩანართი\n{0}',
                    en: 'No sheets with the following names were found in the Excel file\n{0}',
                    ru: 'В файле Excel не было найдено ни одного листа со следующими именами\n{0}'
                },
                excelOneSheetRequired: {
                    ka: 'Excel ფაილში აუცილებელია არსებობდეს მხოლოდ ერთი ჩანართი დასახელებით:\n{0}',
                    en: 'Excel file has to contain only one sheet with the name:\n{0}',
                    ru: 'Файл Excel должен содержать только один лист с названием:\n{0}'
                },
                inSheetRecordsNotFound: {
                    ka: '{0}\nდასახელების მქონე არც ერთ ჩანართში მითითებული არ არის ჩანაწერები',
                    en: 'No records are found in any of the sheets named\n{0}',
                    ru: 'Никаких записей не указано ни в одном листе с названиями\n{0}'
                },
                rsgeUser: {
                    ka: 'rs.ge მომხმარებელი',
                    en: 'rs.ge user',
                    ru: 'rs.ge пользователь'
                },
                serviceUser: {
                    ka: 'სერვისის მომხმარებელი',
                    en: 'Service user',
                    ru: 'Пользователь сервиса'
                },
                loginPassword: {
                    ka: 'შესვლის პაროლი',
                    en: 'Login password',
                    ru: 'Пароль входа'
                },
                password: {
                    ka: 'პაროლი',
                    en: 'Password',
                    ru: 'Пароль'
                },
                confirmPassword: {
                    ka: 'გაიმეორეთ პაროლი',
                    en: 'Confirm Password',
                    ru: 'Подтвердите пароль'
                },
                incorrectPassword: {
                    ka: 'პაროლი არასწორია',
                    en: 'Incorrect password',
                    ru: 'Неверный пароль'
                },
                linkWithBanks: {
                    ka: 'კავშირი ბანკებთან',
                    en: 'Link with banks',
                    ru: 'Связь с банками'
                },
                banksAutoDownloadTransactions: {
                    ka: 'ავტომატური ჩამოტვირთვა',
                    en: 'Automatic download',
                    ru: 'Автоматическая загрузка'
                },
                banksAutoUpdateNeedToLookOperations: {
                    ka: 'ავტომატურად ჩამოტვირთული საბუთის (ბანკის იმპორტი: სანახავია) ჩასწორებისას, შეიცვალოს იმ დღის ჩამოტვირთული ანალოგიური საბუთებიც',
                    en: 'When editing an automatically downloaded document (Bank import: Need to look), similar documents downloaded that day should also be changed',
                    ru: 'При редактировании автоматически загруженного документа (Импорт из банка: Нужно посмотреть) также следует изменить аналогичные документы, загруженного  в этот день'
                },
                banksFeelSubjectWithDescription: {
                    ka: 'საბუთის თემა შეივსოს ბანკის ტრანზაქციის შინაარსით',
                    en: 'The subject of the document should be filled with the description of the bank transaction',
                    ru: 'Заполнить тему документа содержанием банковской транзакции'
                },
                banksNotDownloadDailyActivity: {
                    ka: 'დღის აქტივობა გამოჩნდეს და ჩამოიტვირთოს \'საბანკო დღის\' დახურვამდე',
                    en: 'Daily activity should be displayed and downloaded before closing \'Day of Banking\'',
                    ru: 'Активность дня должна появится и загружаться перед закрытием \'Банковского Дня\''
                },
                bankOfGeorgia: {
                    ka: 'საქართველოს ბანკი',
                    en: 'Bank of Georgia',
                    ru: 'Банк Грузии'
                },
                clientApplication_id: {
                    ka: 'კლიენტის აპლიკაციის ID',
                    en: 'Client Application ID',
                    ru: 'ID приложения клиента'
                },
                NameBankAccountSuperfinAccount: {
                    ka: 'ანგარიშები - დასახელება/ანგარიში ბანკში/ანგარიში სუპერფინში',
                    en: 'Accounts - Name/Bank account/Superfin account',
                    ru: 'Счета - Имя/Банковский счет/Счет Superfin'
                },
                bankAccountsNotFound: {
                    ka: 'არ მოიძებნა შემდეგი საბანკო ანგარიშ(ებ)ი:\n{0}',
                    en: 'The following bank account\'s was not found\n{0}',
                    ru: 'Следующий(е) банковский(е) счет(а) не найден(ы)\n{0}'
                },
                clientApplication_secret: {
                    ka: 'კლიენტის საიდუმლო კოდი',
                    en: 'Client secret code',
                    ru: 'Секретный код клиента'
                },
                downloadingBanksTransactions: {
                    ka: 'დაიწყო მოთხოვნილი ბანკის ტრანზაქციების ჩამოტვირთვა',
                    en: 'Downloading requested Banks Transaction started',
                    ru: 'Началось скачивание запрошенных Банковской Транзакции'
                },
                downloadingBanksTransactionsTooManyRequests: {
                    ka: 'ბანკიდან ტრანზაქციების მოთხოვნების რაოდენობამ გადააჭარბა დღიურ ლიმიტს.\nმიმართეთ ბანკს და გააზრდევინეთ api სერვისის დღიური ლიმიტი',
                    en: 'Количество запросов на транзакцию от банка превысило дневной лимит.\nОбратитесь в банк и увеличьте суточный лимит службы api',
                    ru: 'The number of transaction requests from the bank exceeded the daily limit.\nContact the bank and increase the daily limit of api service'
                },
                bankAccountsGetBankStatementsError: {
                    ka: '{0} ანგარიში ამონაწერის მიღებისას ბანკმა დააბრუნა შეცდომა',
                    en: 'Bank returned error while receiving {0} account statement',
                    ru: 'Банк вернул ошибку при получении выписки {0} со счета'
                },
                toManyTransactionsError: {
                    ka: 'ტრანზაქციების სიმრავლის > 5,000 გამო, შეამცირეთ პერიოდი',
                    en: 'Due to the large number of transactions > 5,000 reduce the period',
                    ru: 'Из за большого количества транзакций > 5,000 сократите период'
                },
                specifyTransactionsCondition: {
                    ka: 'ჩამოსატვირთი ტრანზაქციების სიმრავლის გამო, ჩამოტვირთეთ უკვე მოძებნილი ან დააზუსტეთ ძებნის პირობები',
                    en: 'Due to the large number of downloadable transactions, download already searched or specify the search terms',
                    ru: 'Из за большого количества скачиваемых транзакций, скачайте уже найденные или уточните условия поиска'
                },
                needToLook: {
                    ka: 'სანახავია',
                    en: 'Need to look',
                    ru: 'Нужно посмотреть'
                },
                Price: {
                    ka: 'ფასი',
                    en: 'Price',
                    ru: 'Цена'
                },
                Prices: {
                    ka: 'ფასები',
                    en: 'Prices',
                    ru: 'Цены'
                },
                debit: {
                    ka: 'დებეტი',
                    en: 'Debit',
                    ru: 'Дебет'
                },
                debitAccountNumber: {
                    ka : 'დებეტური ანგარიშის ნომერი',
                    en : 'Debit account number',
                    ru : 'Номер дебетового счета'
                },
                debitAccount: {
                    ka : 'დებეტური ანგარიში',
                    en : 'Debit account',
                    ru : 'Дебетовый счет'
                },
                debitaccount: {
                    ka : 'სადებეტო ანგარიში',
                    en : 'Debit account',
                    ru : 'Дебетовый счет'
                },
                credit: {
                    ka: 'კრედიტი',
                    en: 'Credit',
                    ru: 'Кредит'
                },
                remain: {
                    ka: 'ნაშთი',
                    en: 'Balance',
                    ru: 'Остаток'
                },
                remains: {
                    ka: 'ნაშთები',
                    en: 'Balances',
                    ru: 'Остатки'
                },
                editStartRemains: {
                    ka: 'საწყისი ნაშთების რედაქტირება',
                    en: 'Editing of initial balances',
                    ru: 'Редактирование начальных остатков'
                },
                canNotEditStartRemains: {
                    ka: 'საწყისი ნაშთის შესატანად დაამატეთ პროექტი',
                    en: 'For entering the opening balance, add Project',
                    ru: 'Чтобы ввести начальный остаток добавьте Проект'
                },
                downloadStartRemains: {
                    ka: 'საწყისი ნაშთების ჩამოტვირთვა',
                    en: 'Downloading opening balances',
                    ru: 'Скачивание начальных остатков'
                },
                downloadRemains: {
                    ka: '{0} - ნაშთების ჩამოტვირთვა',
                    en: '{0} - Downloading balances',
                    ru: '{0} - Скачивание остатков'
                },
                income: {
                    ka: 'შემოსავალი',
                    en: 'Income',
                    ru: 'Доход'
                },
                amount: {
                    ka: 'რაოდენობა',
                    en: 'Amount',
                    ru: 'Количество'
                },
                size: {
                    ka: 'ზომა',
                    en: 'Size',
                    ru: 'Размер'
                },
                height: {
                    ka: 'სიმაღლე',
                    en: 'Height',
                    ru: 'Высота'
                },
                outgo: {
                    ka: 'გასავალი',
                    en: 'Outgo',
                    ru: 'Расход'
                },
                turnover: {
                    ka: 'ბრუნვა',
                    en: 'Turnover',
                    ru: 'Оборот'
                },
                turnoverDate: {
                    ka: 'ბრუნვის თარიღი',
                    en: 'Turnover date',
                    ru: 'Число оборота'
                },
                documentDate: {
                    ka: 'საბუთის თარიღი',
                    en: 'Document date',
                    ru: 'Число документа'
                },
                statement: {
                    ka: 'ამონაწერი',
                    en: 'statement',
                    ru: 'выписка'
                },
                Statement: {
                    ka: 'ამონაწერი',
                    en: 'Statement',
                    ru: 'Выписка'
                },
                closeStatement: {
                    ka: 'ამონაწერის დახურვა',
                    en: 'Close statement',
                    ru: 'Закрыть выписку'
                },
                timeZoneOfBalance: {
                    ka: 'დროის სარტყელი ბალანსისთვის',
                    en: 'Time zone for balance',
                    ru: 'Часовой пояс для баланса'
                },
                Currency: {
                    ka: 'ვალუტა',
                    en: 'Currency',
                    ru: 'Валюта'
                },
                Rate: {
                    ka: `კურსი`,
                    en: `Rate`,
                    ru: `Курс`
                },
                Consolidated: {
                    ka: 'ნაერთი',
                    en: 'Consolidated',
                    ru: 'Консолидированный'
                },
                Nominal: {
                    ka: 'ნომინალური',
                    en: 'Nominal',
                    ru: 'Номинальный'
                },
                mainCurrency: {
                    ka: 'ძირითადი ვალუტა',
                    en: 'The main currency',
                    ru: 'Основная валюта'
                },
                remainInMainCurrency: {
                    ka: 'ნაშთი ძირითად ვალუტაში',
                    en: 'Balance in main currency',
                    ru: 'Остаток в основной валюте'
                },
                selectCurrency: {
                    ka: 'ვალუტის ვალუტა',
                    en: 'Choose currency',
                    ru: 'Выберите валюту'
                },
                currentDate: {
                    ka: 'მიმდინარე თარიღი',
                    en: 'Current date',
                    ru: 'Текущая дата'
                },
                startRemains: {
                    ka: 'საწყისი ნაშთები',
                    en: 'Opening balances',
                    ru: 'Начальные остатки'
                },
                endRemains: {
                    ka: 'ბოლო ნაშთები',
                    en: 'Closing balances',
                    ru: 'Конечные остатки'
                },
                startRemain: {
                    ka: 'საწყისი ნაშთი',
                    en: 'Opening balance',
                    ru: 'Конечный остаток'
                },
                endRemain: {
                    ka: 'ბოლო ნაშთი',
                    en: 'Closing balance',
                    ru: 'Последые остаток'
                },
                start: {
                    ka: 'საწყისი',
                    en: 'start',
                    ru: 'начальний'
                },
                Start: {
                    ka: 'საწყისი',
                    en: 'Start',
                    ru: 'Начальний'
                },
                end: {
                    ka: 'ბოლო',
                    en: 'End',
                    ru: 'Последний'
                },
                allDocuments: {
                    ka: 'ყველა საბუთი',
                    en: 'All documents',
                    ru: 'Все документы'
                },
                modifiedOrDeleted: {
                    ka: 'შეცვლილი ან წაშლილი',
                    en: 'Modified or deleted',
                    ru: 'Изменений или удалений'
                },
                lastModifiedOrDeleted: {
                    ka: 'ბოლო შეცვლილი ან წაშლილი',
                    en: 'Last modified or deleted',
                    ru: 'Последний изменений или удалений'
                },
                change: {
                    ka: 'ცვლილება',
                    en: 'Change',
                    ru: 'Изменение'
                },
                changes: {
                    ka: 'ცვლილებები',
                    en: 'Changes',
                    ru: 'Изменения'
                },
                viewTheRefreshChanges: {
                    ka: 'განახლების ცვლილებების ნახვა',
                    en: 'View the refresh changes',
                    ru: 'Просмотреть изменения обновления'
                },
                viewTheRefreshResult: {
                    ka: 'განახლების შედეგის ნახვა',
                    en: 'View the refresh result',
                    ru: 'Посмотреть результат обновления'
                },
                NotFoundModifiedOrDeleted: {
                    ka: 'არც ერთი ცვლილება არ მოიძებნა. <b>\'შეცვლილი ან წაშლილი\'</b> ტიპის საბუთებში მიუთითეთ:\nშეინახოს შეცვლიდან/წაშლიდან - <b>უვადოდ</b>',
                    en: 'No changes found. In document types <b>\'Modified or deleted\'</b> specify:\nSave after modification/deletion <b>permanently</b>',
                    ru: 'Ни одного изменения не найдено. В типах документов <b>\'Измененный или удаленный\'</b> укажите\nСохранить после изменения/удаления <b>бессрочно</b>'
                },
                SavedFromChange: {
                    ka: 'შეინახოს შეცვლიდან/წაშლიდან',
                    en: 'Save after modification/deletion',
                    ru: 'Сохранить после изменения/удаления'
                },
                will_be_launched_from_tomorrow: {
                    ka: 'ამოქმედდება (UTC) ხვალიდან',
                    en: 'will be activated from (UTC) tomorrow',
                    ru: 'будет активирован с (UTC) завтрашнего дня'
                },
                forever: {
                    ka: 'უვადოდ',
                    en: 'permanently',
                    ru: 'бессрочно'
                },
                forOneDay: {
                    ka: 'ერთი დღით',
                    en: 'for one day',
                    ru: 'на один день'
                },
                forMonth: {
                    ka: 'ერთი თვით',
                    en: 'for one month',
                    ru: 'на один месяц'
                },
                forYear: {
                    ka: 'ერთი წლით',
                    en: 'for one year',
                    ru: 'на один год'
                },
                previous: {
                    ka: 'წინა',
                    en: 'Previous',
                    ru: 'Предыдущий'
                },
                next: {
                    ka: 'შემდეგი',
                    en: 'Next',
                    ru: 'Следующий'
                },
                allState: {
                    ka: 'ყველა მდგომარეობა',
                    en: 'All states',
                    ru: 'Все состояния'
                },
                allType: {
                    ka: 'ყველა ტიპი',
                    en: 'All types',
                    ru: 'Все типы'
                },
                chooseDocumentType: {
                    ka: 'აირჩიეთ - საბუთის ტიპი',
                    en: 'Choose - Document type',
                    ru: 'Выберите - Тип документа'
                },
                documentType: {
                    ka: 'საბუთის ტიპი',
                    en: 'Document type',
                    ru: 'Тип документа'
                },
                selectDocumentType: {
                    ka: 'საბუთის ტიპის არჩევა',
                    en: 'Choose documents type',
                    ru: 'Выберите тип документа'
                },
                selectRsInvoiceType: {
                    ka: 'RS ანგარიშ-ფაქტურის ტიპის არჩევა',
                    en: 'Choose RS invoice type',
                    ru: 'Выберите тип RS счет-фактуры'
                },
                selectRsInvoiceState: {
                    ka: 'RS ანგარიშ-ფაქტურის ტიპის მდგომარეობის არჩევა',
                    en: 'Choose RS invoice state',
                    ru: 'Выберите состояние RS счет-фактуры'
                },
                requestInvoice: {
                    ka: 'ითხოვს ანგარიშ-ფაქტურას',
                    en: 'Requires Invoice',
                    ru: 'Требует Счет-фактуру'
                },
                Receive: {
                    ka: 'მიღება',
                    en: 'Receive',
                    ru: 'Принимать'
                },
                receiver: {
                    ka: 'მიმღები',
                    en: 'receiver',
                    ru: 'получатель'
                },
                Move: {
                    ka: 'გადატანა',
                    en: 'Move',
                    ru: 'Перемещать'
                },
                Realization: {
                    ka: 'რეალიზაცია',
                    en: 'Realization',
                    ru: 'Реализация'
                },
                ConsignmentNote: {
                    ka: 'გასავლის ზედდებული',
                    en: 'Consignment Note',
                    ru: 'Товарная Накладная'
                },
                Write_off: {
                    ka: 'ჩამოწერა',
                    en: 'Write-off',
                    ru: 'Списывать'
                },
                Return_back_to_the_supplier: {
                    ka: 'მომწოდებლისთვის უკან დაბუნება',
                    en: 'Return back to the supplier',
                    ru: 'Возврат поставщику'
                },
                Return_back_from_the_buyer: {
                    ka: 'მყიდველისგან უკან დაბრუნება',
                    en: 'Return back from the buyer',
                    ru: 'Возврат от покупателя'
                },
                Production: {
                    ka: 'წარმოება',
                    en: 'Production',
                    ru: 'Производство'
                },
                Customer: {
                    ka: 'მყიდველი',
                    en: 'Customer',
                    ru: 'Покупатель'
                },
                Buyer: {
                    ka: 'მყიდველი',
                    en: 'Buyer',
                    ru: 'Покупатель'
                },
                Buyers: {
                    ka: 'მყიდველები',
                    en: 'Buyers',
                    ru: 'Покупатели'
                },
                Seller: {
                    ka: 'გამყიდველი',
                    en: 'Seller',
                    ru: 'Продавец'
                },
                Supplier: {
                    ka: 'მომწოდებელი',
                    en: 'Supplier',
                    ru: 'Поставщик'
                },
                PrivatePerson: {
                    ka: 'კერძო პირი',
                    en: 'Private person',
                    ru: 'Частное лицо'
                },
                userNameInSuperfinApp: {
                    ka: 'მომხმარებლის სახელი პროგრამა - სუპერფინში',
                    en: 'User Name in the program - Superfin',
                    ru: 'Имя Пользователя в программе - Суперфин'
                },
                allowEditSuperfinAppService: {
                    ka: 'არედაქტირებს პროგრამა სუპერფინის მიერ განახლებულ საბუთებს',
                    en: 'Edits documents updated by the program - Superfin',
                    ru: 'Редактирует документы, обновляемые программой - Суперфин'
                },
                allowEditRsGeService: {
                    ka: 'არედაქტირებს rs.ge სერვისის მიერ განახლებულ საბუთებს',
                    en: 'Edits documents updated by rs.ge service',
                    ru: 'Редактирует документы, обновленные сервисом rs.ge'
                },
                allowEditBanksService: {
                    ka: 'არედაქტირებს ბანკებთან კავშირის სერვისის მიერ შექმნილ საბუთებს',
                    en: 'Edits documents created by bank connection service',
                    ru: 'Редактирует документы, созданные службой подключения к банку'
                },
                allowEditModelsImportService: {
                    ka: 'არედაქტირებს მოდელების იმპორტის სერვისის მიერ შექმნილ საბუთებს',
                    en: 'Edits documents created by the model import service',
                    ru: 'Редактирует документы, созданные службой импорта моделей'
                },
                allowAddAttachments: {
                    ka: 'ამაგრებს ფაილებს ანგარიშებზე / საბუთებზე',
                    en: 'Attaches files to accounts / documents',
                    ru: 'Прикрепляет файлы к  счетам / документам'
                },
                allowDeleteAttachments: {
                    ka: 'შლის ანგარიშებზე / საბუთებზე მიმაგრებულ ფაილებს',
                    en: 'Deletes files attached to accounts / documents',
                    ru: 'Удаляет файлы, прикрепленные к счетам / документам'
                },
                documentInSuperfinHaveQuantities: {
                    ka: 'პროგრამა სუპერფინში საბუთს გააჩნია რაოდენობები',
                    en: 'Documents have quantities in the program Superfin',
                    ru: 'В программе Суперфин документы имеют количества'
                },
                instruction: {
                    ka: 'ინსტრუქცია',
                    en: 'Instruction',
                    ru: 'Инструкция'
                },

                // -----
                VATTheTypeOfPayer: {
                    ka: 'დღგ-ს გადამხდელის ტიპი',
                    en: 'VAT payer type',
                    ru: 'Тип плательщика НДС'
                },
                Payer: {
                    ka: 'გადამხდელი',
                    en: 'Payer',
                    ru: 'Плательщик'
                },
                FreeWithRightOfOffset: {
                    ka: 'ჩათვლის უფლებით გათავისუფლებული',
                    en: 'Free with right of offset',
                    ru: 'Освобожденный правом зачета'
                },
                FreeWithoutRightOfOffset: {
                    ka: 'ჩათვლის უფლების გარეშე გათავისუფლებული',
                    en: 'Free without right of offset',
                    ru: 'Освобожденный без право зачета'
                },
                NotPayer: {
                    ka: 'არაგადამხდელი',
                    en: 'Non-payer',
                    ru: 'Неплательщик'
                },
                // -----
                VATAccountType: {
                    ka: 'დღგ-ს ანგარიშის ტიპი',
                    en: 'VAT account type',
                    ru: 'Тип счета НДС'
                },
                PayableVAT: {
                    ka: 'გადასახდელი დღგ - მიწოდებაზე',
                    en: 'VAT payable - for delivery',
                    ru: 'НДС к уплате - за поставку'
                },
                PayableVATForAdvancePayment: {
                    ka: 'გადასახდელი დღგ - ავანსზე',
                    en: 'VAT payable – for the advance payment',
                    ru: 'НДС к уплате - на аванс'
                },
                DeliveryVATOfAdvancePayment: {
                    ka: 'ავანსზე - მიწოდების დღგ',
                    en: 'Delivery VAT - for advance payment',
                    ru: 'НДС на поставку - на аванс'
                },
                LocalVAT: {
                    ka: 'ჩასათვლელი დღგ - ადგილობრივი',
                    en: 'Included VAT - local',
                    ru: 'Зачетный НДС - местный'
                },
                FixedVAT: {
                    ka: 'ჩასათვლელი დღგ - ძირითადები',
                    en: 'VAT included - fixed assets',
                    ru: 'Зачетный НДС - основные средства'
                },
                ImportVAT: {
                    ka: 'ჩასათვლელი დღგ - იმპორტი',
                    en: 'VAT included - import',
                    ru: 'Зачетный НДС - импорт'
                },
                PrepayVAT: {
                    ka: 'ჩასათვლელი დღგ - ავანსი',
                    en: 'VAT included - advance payment‘',
                    ru: 'Зачетный НДС - аванс'
                },
                AdvancePayment: {
                    ka: 'ავანსი',
                    en: 'Advance payment‘',
                    ru: 'Аванс'
                },
                // -----
                VATTypeOfTaxation: {
                    ka: 'დღგ - დაბეგვრის ტიპი',
                    en: 'VAT - Type of taxation',
                    ru: 'НДС - Тип налогообложения'
                },
                Normal: {
                    ka: 'ჩვეულებრივი',
                    en: 'Normal',
                    ru: 'Обычный'
                },
                Null: {
                    ka: 'ნულოვანი',
                    en: 'Null',
                    ru: 'Нулевой'
                },
                TaxFree: {
                    ka: 'დაუბეგრავი',
                    en: 'Tax free',
                    ru: 'Не облагаемый налогом'
                },
                // -----
                AccountOfServiceRealization: {
                    ka: 'მომსახურების რეალიზაციის ანგარიში',
                    en: 'Service realization account',
                    ru: 'Счет реализации услуг'
                },
                AccountOfVAT: {
                    ka: 'დღგ-ს ანგარიში',
                    en: 'VAT account',
                    ru: 'Счет НДС'
                },
                AccountOfServiceExpense: {
                    ka: 'მომსახურების ხარჯის ანგარიში',
                    en: 'Service expense account',
                    ru: 'Счет расходов услуг'
                },
                ReverseKitting: {
                    ka: 'დეკომპლექტაცია',
                    en: 'Reverse kitting',
                    ru: 'Декомплектация'
                },
                retailSale: {
                    ka: 'საცალო გაყიდვა',
                    en: 'retail sale',
                    ru: 'розничные продажа'
                },
                RetailSale: {
                    ka: 'საცალო გაყიდვა',
                    en: 'Retail sale',
                    ru: 'Розничные продажа'
                },
                AccountingOperation: {
                    ka: 'საბუღალტრო ოპერაცია',
                    en: 'Accounting operation',
                    ru: 'Бухгалтерская операция'
                },
                CashBoxIncomeOrder: {
                    ka: 'სალაროს შემოსავლის ორდერი',
                    en: 'Cash box income order',
                    ru: 'Приходный кассовый ордер'
                },
                CashBoxExpenditureOrder: {
                    ka: 'სალაროს გასავლის ორდერი',
                    en: 'Cash box expenditure order',
                    ru: 'Расходный кассовый ордер'
                },
                BankTransfer: {
                    ka: 'საბანკო გადარიცხვა',
                    en: 'Bank transfer',
                    ru: 'Банковский перевод'
                },
                BankIncome: {
                    ka: 'ჩარიცხვა',
                    en: 'Income',
                    ru: 'Доход'
                },
                BankOutcome: {
                    ka: 'გადარიცხვა',
                    en: 'Transfer',
                    ru: 'Перевод'
                },
                DocumentNumber: {
                    ka: 'საბუთის ნომერი',
                    en: 'Document Number',
                    ru: 'Номер документа'
                },
                BankTransferInCurrency: {
                    ka: 'ბანკის სავალუტო გადარიცხვა',
                    en: 'Bank transfer in currency',
                    ru: 'Валютный перевод банка'
                },
                SalaryDocument: {
                    ka: 'ხელფასის საბუთი',
                    en: 'Salary document',
                    ru: 'Зарплатный документ'
                },
                FixedAssetsDocuments: {
                    ka: 'ძირითადი საშუალებების საბუთი',
                    en: 'Fixed assets document',
                    ru: 'Документ основных средств'
                },
                Invoice: {
                    ka: 'ანგარიშ-ფაქტურა',
                    en: 'Invoice',
                    ru: 'Счет-фактура'
                },
                ALLInvoice: {
                    ka: 'ყველა ანგარიშ-ფაქტურა',
                    en: 'All Invoices',
                    ru: 'Все счета-фактуры'
                },
                ALLTransaction: {
                    ka: 'ყველა ტრანზაქცია',
                    en: 'All Transaction',
                    ru: 'Все транзакции'
                },
                Invoices: {
                    ka: 'ანგარიშ-ფაქტურები',
                    en: 'Invoices',
                    ru: 'Счета-фактуры'
                },
                RsInvoices: {
                    ka: 'RS ანგარიშ-ფაქტურები',
                    en: 'RS Invoices',
                    ru: 'RS Счета-фактуры'
                },
                RsInvoice: {
                    ka: 'RS ანგარიშ-ფაქტურა',
                    en: 'RS Invoice',
                    ru: 'RS Счет-фактура'
                },
                DeclarationN: {
                    ka: 'დეკლარაციის N',
                    en: 'Declaration N',
                    ru: 'Декларация N'
                },
                RsWaybill: {
                    ka: 'RS ზედდნადები',
                    en: 'RS Waybill',
                    ru: 'RS Накладная'
                },
                ForLoading: {
                    ka: "ასატვირთი",
                    en: "For uploading",
                    ru: "Для загрузки"
                },
                SendOnes: {
                    ka: "გადასაგზავნი",
                    en: "Send ones",
                    ru: "Для отправки"
                },
                Forwarded: {
                    ka: "გადაგზავნილი",
                    en: "Forwarded",
                    ru: "Пересланний"
                },
                Confirmed: {
                    ka: "დადასტურებული",
                    en: "Confirmed",
                    ru: "Подтвержденный"
                },
                TheFirst: {
                    ka: "პირველადი",
                    en: "Primary",
                    ru: "Первичный"
                },
                CorrectedSendOnes: {
                    ka: "გადასაგზავნი (კორექტირებული)",
                    en: "Send ones (corrected)",
                    ru: "Для отправки (исправленный)"
                },
                CorrectedForwarded: {
                    ka: "გადაგზავნილი (კორექტირებული)",
                    en: "Forwarded (corrected)",
                    ru: "Пересланний исправленный"
                },
                CorrectedConfirmed: {
                    ka: "დადასტურებული (კორექტირებული)",
                    en: "Confirmed (corrected)",
                    ru: "Пересланний (исправленный)"
                },
                Canceled: {
                    ka: "გაუქმებული",
                    en: "Cancelled",
                    ru: "Отмененный"
                },
                Replaced: {
                    ka: "ჩანაცვლებული",
                    en: "Replaced",
                    ru: "Замененный"
                },
                Created: {
                    ka: "შეიქმნა",
                    en: "Created",
                    ru: "Созданный"
                },
                Changed: {
                    ka: "შეიცვალა",
                    en: "It changed",
                    ru: "Изменился"
                },
                Modified: {
                    ka: "შეცვლილი",
                    en: "Modified",
                    ru: "Изменённый"
                },
                Deleted: {
                    ka: "წაშლილი",
                    en: "Deleted",
                    ru: "Удаленный"
                },
                CanceledConfirmed: {
                    ka: "დადასტურებული (გაუქმებული)",
                    en: "Confirmed (cancelled)",
                    ru: "Отмененный (подтвержденный)"
                },
                Rejected: {
                    ka: "უარყოფილი",
                    en: "Rejected",
                    ru: "Опровергнутый"
                },
                downloadRsInvoices: {
                    ka: "მომსახურების ჩამოტვირთვა",
                    en: "Download the service",
                    ru: "Скачать услугу"
                },
                syncValidateRsInvoices: {
                    ka: "სინქრონიზაცია / შემოწმება",
                    en: "Synchronization / Check",
                    ru: "Синхронизировать / Проверить"
                },
                synchronization: {
                    ka: "სინქრონიზაცია",
                    en: "Synchronization",
                    ru: "Синхронизировать"
                },
                documents: {
                    ka: 'საბუთები',
                    en: 'Documents',
                    ru: 'Документы'
                },
                needToRefreshDocuments: {
                    ka: 'საბუთები გასაახლებელია',
                    en: 'Need to refresh documents',
                    ru: 'Нужно обновит документы'
                },
                accountsDataRecommendations: {
                    ka: 'მონაცემების დამატება რეკომენდირებულია შემდეგ ანგრიშებზე',
                    en: 'Adding data is recommended on the following accounts',
                    Ru: 'Добавление данных рекомендуется для следующих счетов'
                },
                documentNotExist: {
                    ka: 'ID={0} - საბუთი არ მოიძებნა',
                    en: 'ID={0} - document not found',
                    ru: 'ID={0} - документ не найден'
                },
                accountsSatisfiesInvoiceOptions: {
                    ka: 'ID={0} - საბუთის გატარებების ანგარიშები არ აკმაყოფილებს პარამეტრებში მითითებულ ანგარიშ-ფაქტურების ანგარიშების პირობებს',
                    en: 'The accounts of the ID={0} – document entries do not meet the conditions of the invoice accounts specified in the parameters',
                    ru: 'Счета проводок ID={0} - документа не удовлетворяют условия счетов счет-фактур, указанных в параметрах'
                },
                accountsSatisfiesBothInvoiceOptions: {
                    ka: 'ID={0} - საბუთის გატარებების ანგარიშები ერთდროულად აკმაყოფილებს პარამეტრებში მითითებულ სხვადასხვა ანგარიშ-ფაქტურის ანგარიშების პირობებს',
                    en: 'The accounts of ID={0} – document entries simultaneously meet the conditions of different invoice accounts specified in the parameters',
                    ru: 'Счета проводок ID={0} - документа одновременно удовлетворяют условия счетов разных счет-фактур, указанных в параметрах'
                },
                manyAccountsBuyers: {
                    ka: 'ID={0} - საბუთის გატარებებში მონაწილეობს სხვადასხვა მყიდველის ანგარიშები',
                    en: 'Accounts of various buyers participate in ID={0} - document entries',
                    ru: 'В проводках ID={0} - документа участвуют счета различных покупателей'
                },
                accountsBuyerNotFound: {
                    ka: 'ID={0} - საბუთის არც-ერთ ანგარიშს არ აქვს მითითებული - მყიდველი',
                    en: 'No account ID={0} – document has specified a buyer',
                    ru: 'Не в одном счете ID={0} – документа не указан покупатель'
                },
                accountsOrganizationPersonNotFound: {
                    ka: 'ID={0} - საბუთის მყიდველის ანგარიშს არ აქვს მითითებული - ორგანიზაციის ან კერძო პირის საიდენტიფიკაციო / პირადი ნომერი',
                    en: 'ID={0} - document buyer\'s account does not have specified - identification number of the organization or a private person / personal number',
                    ru: 'В счете покупателя ID={0} - документа не указан - идентификационный / личный номер организации или личности'
                },
                manyAccountsVatTypes: {
                    ka: 'ID={0} - საბუთის გატარებებში მონაწილეობს სხვადასხვა \'დღგ-ს ანგარიშის ტიპი\' ანგარიშები',
                    en: 'Different \'VAT account type\' accounts participate in entries of ID={0} - document',
                    ru: 'Разные \'тип счета НДС\' счета участвуют в проводках ID={0} - документа'
                },
                notFitVatType: {
                    ka: 'ID={0} - საბუთის გატარებებში მონაწილე \'დღგ-ს ანგარიშის ტიპი\' არ შეესაბამება პარამეტრების მიხედვით შესაქმნელი ანგარიშ-ფაქტურის ტიპს',
                    en: '\\‘VAT account type\\’ participating in entries of ID={0} – document does not correspond to the invoice type to be created according to the parameters',
                    ru: '\\‘Тип счета НДС\\’, участвующий в проводках ID={0} - документа не соответствует типу счет-фактуры, который должен быть создан в соответствии с параметрами'
                },
                buyerNotFoundByIdNumberNotFound: {
                    ka: 'არ მოიძებნა - {0} - საიდენტიფიკაციო / პირადი ნომრის მქონე მყიდველი',
                    en: 'Buyer with the identification / personal number - {0} - not found',
                    ru: 'Не найден покупатель с идентификационным / личным номером - {0}'
                },
                documentDoNotHaveWaybill: {
                    ka: 'ID={0} - საბუთს არ გააჩნია გააჩნია RS ზედნადები',
                    en: 'ID={0} - document does not have RS waybill',
                    ru: 'ID={0} - документ не имеет RS накладное'
                },
                documentCanNotMakeRsInvoice: {
                    ka: 'ID={0} - საბუთზე შეუძლებელია ანგარიშ-ფაქტურის გამოწერა',
                    en: 'Invoice can not be issued for the document ID={0}',
                    ru: 'На ID={0} - документе невозможно выписать счет-фактуру'
                },
                documentHaveRsInvoice: {
                    ka: 'ID={0} - საბუთი მონაწილეობს ანგარიშ-ფატურაში',
                    en: 'ID={0} - the document participates in the invoice',
                    ru: 'ID={0} - документ участвует в счет-фактуре'
                },
                customerIdNumberNotFound: {
                    ka: 'ID={0} - საბუთის არც-ერთ ანგარიშს არ აქვს მითითებული {1} საიდენტიფიკაციო ნომერის მქონე მყიდველი',
                    en: 'No account of ID={0} - document includes a buyer with {1} identification number',
                    ru: 'Не в одном счете ID={0} - документа не указан покупатель {1} с идентификационным номером'
                },
                vatTypeNotFound: {
                    ka: 'ID={0} - საბუთის არც-ერთ დღგ-ს ანგარიშს არ აქვს მითითებული \'{1}\' მქონე \'დღგ-ს ანგარიშის ტიპი\'',
                    en: 'No VAT account of ID={0} – document includes \'VAT account type\' with \'{1}\'',
                    ru: 'Не в одном НДС счете ID={0} – документа не указан \'тип НДС счета\' имеющий  \'{1}\''
                },
                differentBayerAccountFound: {
                    ka: 'ID={0} - საბუთში მონაწილეობს ID={1} - საბუთისგან განსხვავებული მყიდველის ანგარიში',
                    en: 'Buyer’s account different from ID={1} - document participates in - ID={0} document',
                    ru: 'В документе - ID={0} участвует счет покупателя отличающийся от ID={1} - документа'
                },
                createBuyersRequestedRsInvoices: {
                    ka: 'მყიდველებისგან მოთხოვნილი ანგარიშ-ფაქტურების შექმნა',
                    en: 'Create invoices requested by buyers',
                    ru: 'Создание счетов-фактур по запросам покупателей'
                },
                taxableMonth: {
                    ka: 'დასაბეგრი თვეე',
                    en: 'Taxable month',
                    ru: 'Налогооблагаемый месяц'
                },
                taxableYear: {
                    ka: 'დასაბეგრი წელი',
                    en: 'Taxable year',
                    ru: 'Налогооблагаемый год'
                },
                requestedRsInvoices: {
                    ka: 'მოთხოვნილი ა/ფ-ები',
                    en: 'Requested invoices',
                    ru: 'Запрошенные счета-фактуры'
                },
                createRequestedRsInvoices: {
                    ka: 'მოთხოვნილი ა/ფ-ების შექმნა',
                    en: 'Creating requested invoices',
                    ru: 'Создание запрошенных счет-фактур'
                },
                uploadRsInvoices: {
                    ka: 'ა/ფ-ების ატვირთვა',
                    en: "Upload invoices",
                    ru: "Загрузка счета-фактуры"
                },
                syncRsInvoices: {
                    ka: "ა/ფ-ების სინქრონიზაცია",
                    en: "Synchronize invoices",
                    ru: "Синхронизация счета-фактуры"
                },
                syncUploadRsInvoices: {
                    ka: "ა/ფ-ების სინქრონიზაცია-ატვირთვა",
                    en: "Synchronize-Upload invoices",
                    ru: "Синхронизация-Загрузка счет-фактур"
                },
                pairingRsInvoices: {
                    ka: "ა/ფ-ების დაწყვილება",
                    en: "Pairing invoices",
                    ru: "Спаривание счет-фактур"
                },
                pair: {
                    ka: "დაწყვილდეს",
                    en: "Pair",
                    ru: "Спаривать"
                },
                registerOfPairedInvoices: {
                    ka: "დაწყვილებული ა/ფ-ების რეესტრი",
                    en: "The register of paired invoices",
                    ru: "Реестр парных счет-фактур"
                },
                registerOfPairedInvoices_XLSX_title1: {
                    ka: "მიწოდების ფაქტურის სერია და ნომერი",
                    en: "Delivery invoice series and number",
                    ru: "Серия и номер счет-фактуры на поставку"
                },
                registerOfPairedInvoices_XLSX_title2: {
                    ka: "ავანსის ფაქტურის სერია და ნომერი",
                    en: "Advance payment invoice series and number",
                    ru: "Серия и номер счет-фактуры аванса"
                },
                downloadingInvoices: {
                    ka: 'მოთხოვნილი ა/ფ-ების ჩამოტვირთვა',
                    en: 'Download requested invoices',
                    ru: 'Скачивание запрошенных счет-фактур'
                },
                creatingRequestedInvoicesStarted: {
                    ka: 'მოთხოვნილი ა/ფ-ების შექმნა დაიწყო\n{0} - ელ. ფოსტის მისამართზე ინფორმაციას მიიღებთ მოგვიანებით',
                    en: 'Creating requested invoices has started\n{0} - you will receive the information to your email later',
                    ru: 'Началось создание запрошенных счет-фактур\n{0} - вы получите информацию на свою электронную почту позже'
                },
                syncUploadingRequestedInvoicesStarted: {
                    ka: 'ა/ფ-ების სინქრონიზაცია-ატვირთვა დაიწყო\n{0} - ელ. ფოსტის მისამართზე ინფორმაციას მიიღებთ მოგვიანებით',
                    en: 'Synchronizing-Uploading invoices has started\non - {0} - email address, information will be delivered further',
                    ru: 'Началось синхронизация-загрузка счет-фактур\nна - {0} - эл. адрес, информация будет отправлена попозже'
                },
                pairingInvoicesStarted: {
                    ka: 'ა/ფ-ების დაწყვილება დაიწყო\n{0} - ელ. ფოსტის მისამართზე ინფორმაციას მიიღებთ მოგვიანებით',
                    en: 'Pairing invoices has started\non - {0} - email address, information will be delivered further',
                    ru: 'Началось Спаривание счет-фактур\nна - {0} - эл. адрес, информация будет отправлена попозже'
                },
                downloadingInvoicesStarted: {
                    ka: 'მოთხოვნილი ა/ფ-ების ჩამოტვირთვა დაიწყო\n{0} - ელ. ფოსტის მისამართზე ინფორმაციას მიიღებთ მოგვიანებით',
                    en: 'Downloading requested invoices has started\non - {0} - email address, information will be delivered further',
                    ru: 'Началось скачивание запрошенных счет-фактур завершено\nна - {0} - эл. адрес, информация будет отправлена попозже'
                },
                downloadingInvoicesTitle: {
                    ka: `გამოწერის თარიღი/ოპერაციის თარიღი/ნომერი/ორგანიზაცია/სტატუსი/თანხა/დღგ/თემა/შედეგი`,
                    en: `Date of issue/Date of operation/Number/Organization/Status/Amount/VAT/Subject/Result`,
                    ru: `Дата выписки/Дата операции/Номер/Организация/Статус/Сумма/НДС/Тема/Результат`
                },
                creatingRequestedInvoicesSubject: {
                    ka: 'მოთხოვნილი ა/ფ-ების შექმნა',
                    en: 'Creating requested invoices',
                    ru: 'Создание запрошенных счет-фактур',
                },
                pairedInvoicesSubject: {
                    ka: 'ბოლო დაწყვილებული ა/ფ-ები',
                    en: "Last paired invoices",
                    ru: "Последние парные счет-фактуры "
                },
                syncUploadingRequestedInvoicesSubject: {
                    ka: 'ა/ფ-ების სინქრონიზაცია-ატვირთვა',
                    en: 'Synchronizing-Uploading invoices',
                    ru: 'Синхронизация-Загрузка счет-фактур',
                },
                creatingRequestedInvoicesEnd: {
                    ka: 'მოთხოვნილი ა/ფ-ების შექმნა დასრულდა',
                    en: 'Creating requested invoices is complete',
                    ru: 'Создание запрошенных счет-фактур завершено'
                },
                syncUploadingRequestedInvoicesEnd: {
                    ka: 'ა/ფ-ების სინქრონიზაცია-ატვირთვა დასრულდა',
                    en: 'Synchronizing-Uploading invoices has end',
                    ru: 'Синхронизация-Загрузка счет-фактур завершено'
                },
                downloadingInvoicesEnd: {
                    ka: 'მოთხოვნილი ა/ფ-ების ჩამოტვირთვა დასრულდა',
                    en: 'Downloading requested invoices is complete',
                    ru: 'Скачивание запрошенных счет-фактур завершено'
                },
                seeAttachmentFile: {
                    ka: 'იხილეთ მიმაგრებული ფაილი',
                    en: 'See attachment file',
                    ru: 'См. Прикрепленный файл'
                },
                see: {
                    ka: 'იხილეთ',
                    en: 'See',
                    ru: 'См.'
                },
                deleteAttachmentFile: {
                    ka: 'წაიშალოს მიმაგრებული ფაილი?\n<small><b>{0}</b></small>',
                    en: 'Delete attached file?\n<small><b>{0}</b></small>',
                    ru: 'Удалить прикрепленный файл?\n<small><b>{0}</b></small>'
                },
                // -----
                everywhere: {
                    ka: 'ყველგან',
                    en: 'Everywhere',
                    ru: 'Везде'
                },
                account: {
                    ka: 'ანგარიში',
                    en: 'Account',
                    ru: 'Счет'
                },
                correspondence: {
                    ka: 'კორესპონდენცია',
                    en: 'Correspondence',
                    ru: 'Корреспонденция'
                },
                allCorrespondence: {
                    ka: 'ყველა კორესპონდენცია',
                    en: 'All Correspondence',
                    ru: 'Вся корреспонденция'
                },
                corAccountFullNumber: {
                    ka: 'მოკორესპოდენტო ანგარიშის ნომერი',
                    en: 'Number of the correspondent account',
                    ru: 'Номер корреспондентского счета'
                },
                corAccountName: {
                    ka: 'მოკორესპოდენტო ანგარიშის სახელი',
                    en: 'Name of the correspondent account',
                    ru: 'Имя корреспондентского счета'
                },
                corAccountCurrency: {
                    ka: 'მოკორესპოდენტო ანგარიშის ვალუტა',
                    en: 'Currency of the correspondent account',
                    ru: 'Валюта корреспондентского счета'
                },
                accountInDebit: {
                    ka: 'ანგარიში დებეტში',
                    en: 'Account in debit',
                    ru: 'Счет в дебете'
                },
                accountInCredit: {
                    ka: 'ანგარიში კრედიტში',
                    en: 'Account in credit',
                    ru: 'Счет в кредите'
                },
                amountInMainCurrency: {
                    ka: 'თანხა ძირითად ვალუტაში',
                    en: 'Amount in the main currency',
                    ru: 'Сумма в основной валюте'
                },
                currencyInDebit: {
                    ka: 'ვალუტა დებეტში',
                    en: 'Currency in debit',
                    ru: 'Валюта в дебете'
                },
                currencyOfAmount: {
                    ka: 'თანხის ვალუტა',
                    en: 'Currency of amount',
                    ru: 'Валюта суммы'
                },
                currencyInCredit: {
                    ka: 'ვალუტა კრედიტში',
                    en: 'Currency in credit',
                    ru: 'Валюта в кредите'
                },
                executor: {
                    ka: 'შემსრულებელი',
                    en: 'Executor',
                    ru: 'Исполнитель'
                },
                invoiceNumber: {
                    ka: 'ანგარიშ-ფაქტურის ნომერი',
                    en: 'Invoice number',
                    ru: 'Номер счет-фактуры'
                },
                invoiceID: {
                    ka: 'ანგარიშ-ფაქტურის ID',
                    en: 'Invoice ID',
                    ru: 'ID счет-фактуры'
                },
                invoiceRsID: {
                    ka: 'ანგარიშ-ფაქტურის RS-ID',
                    en: 'Invoice RS-ID',
                    ru: 'RS-ID счет-фактуры'
                },
                invoiceStatus: {
                    ka: 'ანგარიშ-ფაქტურის მდგომარეობა',
                    en: 'Invoice status',
                    ru: 'Статус счет-фактуры'
                },
                invoiceBuyerTitle: {
                    ka: 'მყიდველი - ანგარიში/ს.ნ./სახელი',
                    en: 'Buyer - Account/I.N/Name',
                    ru: 'Покупатель - Счет/И.Н./Название'
                },
                status: {
                    ka: 'მდგომარეობა',
                    en: 'Status',
                    ru: 'Статус'
                },
                findOutBecauseOfTheInvoice: {
                    ka: 'ანგარიშ-ფაქტურა გასარკვევია',
                    en: 'Invoice needs clarification',
                    ru: 'Счет-фактура требует выяснения'
                },
                waybillID: {
                    ka: 'ზედნადების RS-ID',
                    en: 'Waybill RS-ID',
                    ru: 'RS-ID накладной'
                },
                executed: {
                    ka: 'შესრულებული',
                    en: 'Executed',
                    ru: 'Выполненный'
                },
                superfinId: {
                    ka: 'სუპერფინის ID',
                    en: 'Superfin ID',
                    ru: 'Суперфин ID'
                },
                largeNumberOfAccounts: {
                    ka: 'ანგარიშების სიმრავლის გამო, დააზუსტეთ ანგარიშის ძებნის პირობები',
                    en: 'Due to the large number of accounts, specify the terms of the account search',
                    ru: 'Из за большого количества счетов, уточните условия поиска счетов'
                },
                selectAllSameNumbersInvoicesAsDownloadable: {
                    ka: 'ანგარიშ-ფაქტურის ყველა საქონელი/მომსახურება არ გაქვთ ჩამოსატვირთად მონიშნული',
                    en: 'You do not have all the goods/services of the invoice marked for download',
                    ru: 'У вас не все товары/услуги, указанные в счете-фактуре, отмечены для скачивания'
                },
                selectAllSameNumbersInvoicesAsAttached: {
                    ka: 'ანგარიშ-ფაქტურის ყველა საქონელი/მომსახურება უნდა იყოს დანიშნულებით - “საბუთზე მიბმული (არ იტვირთება)”',
                    en: 'All goods/services of the invoice must be with purpose - "Attached to document (no downloadable)"',
                    ru: 'Все товары/услуги в счете-фактуре должны быть указаны с назначения - "Прилагается к документу (не скачиваемый)"'
                },
                selectAllSameBankDocumentIdTransactionsAsDownloadable: {
                    ka: 'საბანკო ოპერაცია და საკომისიო, ორივე არ გაქვთ მონიშნული ჩამოსატვირთად',
                    en: 'You have not selected both for download, banking operation and commission',
                    ru: 'Для скачивания вы не выбрали обоих, банковскую операцию и комиссионную'
                },
                importNeedToBeLooked: {
                    ka: 'იმპორტი სანახავია',
                    en: 'Import needs to be looked',
                    ru: 'Импорт нужно посмотреть'
                },
                doNotShowImportNeedToBeLooked: {
                    ka: 'აღარ მაჩვენო და ჩამოტვირთე ხვალიდან, <b>{0}</b> თარიღიდან',
                    en: 'Don’t show me and download from tomorrow, from the date <b>{0}</b>',
                    ru: 'Не показывать мне и скачивать с завтрашнего дня, с даты <b>{0}</b>'
                },
                bankTransactionsRequestDate: {
                    ka: 'ახალი ტრანზაქციების ჩამოტვირთვის თარიღია <b>{0}</b>',
                    en: 'Date for downloading new transactions <b>{0}</b>',
                    ru: 'Дата  скачивания новых транзакций <b>{0}</b>'
                },
                bankAccount: {
                    ka: 'საბანკო ანგარიში',
                    en: 'Bank Account',
                    ru: 'Банковский счет'
                },

                instructions_link_01: {
                    ka: 'შექმნა / რედაქტირების',
                    en: 'Creating / Editing',
                    ru: 'Создание / Редактирование'
                },
                instructions_link_02: {
                    ka: 'ანგარიშგებების ინსტრუქცია',
                    en: 'Reporting Instruction',
                    ru: 'Инструкция по отчетности'
                },
                instructions_link_03: {
                    ka: 'პარამეტრების ინსტრუქცია',
                    en: 'Parameters instruction',
                    ru: 'Инструкция по параметрам'
                },
                instructions_link_04: {
                    ka: 'მონაცემების დამატება',
                    en: 'Adding data',
                    ru: 'Добавление данных'
                },
                instructions_link_05: {
                    ka: 'საწყისი და მიმდინარე ნაშთები',
                    en: 'Initial and current balances',
                    ru: 'Начальные и текущие остатки'
                },
                instructions_link_06: {
                    ka: 'მიმოხილვის ინსტრუქცია',
                    en: 'Instruction of Overview',
                    ru: 'Инструкция Обзора'
                },
                instructions_link_07: {
                    ka: 'მოდელების ინსტრუქცია',
                    en: 'Instruction of Models',
                    ru: 'Инструкция Моделей'
                },
                instructions_07: {
                    ka: 'შექმნა / რედაქტირება / დუბლირება',
                    en: 'Creating / Editing / Duplicating',
                    ru: 'Создание / Редактирование / Дублирование'
                },
                instructions_11: {
                    ka: 'ბრუნვა და ამონაწერი',
                    en: 'Turnover and statement',
                    ru: 'Оборот и выписка'
                },
                instructions_20: {
                    ka: 'ძებნა ვებ-სუპერფინში',
                    en: 'Search in Web-Superfin',
                    ru: 'Поиск  в Веб-суперфин'
                },
                // ----- formulas
                formula_prefix_t: {
                    ka: 'ბ',
                    en: 't',
                    ru: 'о'
                },
                formula_suffix_c: {
                    ka: 'ნ',
                    en: 'c',
                    ru: 'к'
                },
                formula_suffix_p: {
                    ka: 'პ',
                    en: 'p',
                    ru: 'п'
                },

                formula_prefix_r: {
                    ka: 'ნ',
                    en: 'r',
                    ru: 'о'
                },
                formula_prefix_rd: {
                    ka: 'ნდ',
                    en: 'rd',
                    ru: 'од'
                },
                formula_prefix_rc: {
                    ka: 'ნკ',
                    en: 'rc',
                    ru: 'ок'
                },
                formula_prefix_rm: {
                    ka: 'ნმ',
                    en: 'rm',
                    ru: 'ом'
                },

                formula_prefix_d: {
                    ka: '(?<!ნ)დ',
                    en: '(?<!r)d',
                    ru: '(?<!о)д'
                },
                formula_prefix_dn: {
                    ka: 'დ',
                    en: 'd',
                    ru: 'д'
                },
                formula_prefix_c: {
                    ka: '(?<!ნ)კ',
                    en: '(?<!r)c',
                    ru: '(?<!о)к'
                },
                formula_prefix_cn: {
                    ka: 'კ',
                    en: 'c',
                    ru: 'к'
                },

                // სისტემური
                chooseGSSEnvironment: {
                    ka: "აირჩიეთ 'GSS გარემო'",
                    en: "Choose 'GSS Environment'",
                    ru: "Выбери 'GSS Среду'"
                },
                invitationLinkIsIncorrect: {
                    ka: 'ბმული არაკორექტულია ან მისი მოქმედების ვადა ამოიწურა!',
                    en: 'Link is incorrect or expired!',
                    ru: 'Ссылка некорректна или просрочена!'
                },
                // ორგანიზაციები
                organizations: {
                    ka: 'ორგანიზაციები',
                    en: 'Organizations',
                    ru: 'Организации'
                },
                Organization: {
                    ka: 'ორგანიზაცია',
                    en: 'Organization',
                    ru: 'Организация'
                },
                identificationCode: {
                    ka: 'საიდენტიფიკაციო ნომერი',
                    en: 'Identification Number',
                    ru: 'Идентификационный Номер'
                },
                unauthorizedOrganizationUser: {
                    ka: '{0} - არ არის მოთხოვნილი ორგანიზაციის მომხმარებელი',
                    en: '{0} - is not a user of the requested organization',
                    ru: '{0} - не является пользователем запрошенной организации'
                },
                OrgRestorePossibleTill: {
                    ka: 'ორგანიზაციის აღდგენა შესაძლებელია {0} დრომდე',
                    en: 'Restoring organization is possible till {0} time',
                    ru: 'Восстановление организации возможно до {0} время'
                },
                UserIsNotMemberOfOrganizacion: {
                    ka: 'მომხმარებელი არ არის მოთხოვნილი ორგანიზაციის წევრი',
                    en: 'User is not a member of requested Organization',
                    ru: 'Пользователь не является членом запрашиваемой организации'
                },
                webIsRestrictedToUserEmail: {
                    ka: 'ეს ვებ გვერდი ყველა მომხმარებლისათვის არ არის ხელმისაწვდომი',
                    en: 'This web page is not accessible to all users',
                    ru: 'Этот веб-сайт не доступен для всех пользователей'
                },
                ShowOrganizationOnPortal: {
                    ka: 'ეს ორგანიზაცია გამოჩნდეს პორტალზე',
                    en: 'This organization should be displayed on the portal',
                    ru: 'Эта организация должна появится на портале'
                },
                // დაკავშირებული პროგრამები
                linkedPrograms: {
                    ka: 'დაკავშირებული პროგრამები',
                    en: 'Connected programs',
                    ru: 'Подключенные программы'
                },
                authorized: {
                    ka: 'ავტორიზირებულია',
                    en: 'Authorized',
                    ru: 'Авторизованный'
                },
                notAuthorized: {
                    ka: 'არ არის ავტორიზირებულია',
                    en: 'Not Authorized',
                    ru: 'Не Авторизованный'
                },
                linkedProgramNotAuthorized: {
                    ka: 'დაკავშირებული პროგრამა {0} არ არის ავტორიზირებული',
                    en: 'Connected Program {0} is not Authorized',
                    ru: 'Подключенная Программа {0} не авторизована'
                },
                // სუპერფინი
                searchInDocuments: {
                    ka: 'ძებნა საბუთებში',
                    en: 'Search in documents',
                    ru: 'Поиск в документах'
                },
                searchInDocumentsOptions: {
                    ka: ['იმპორტი: საქართველოს ბანკი', 'ბანკის იმპორტი: სანახავია', 'შესრულებული: არა', 'მდგომარეობა: გასარკვევი', 'სუპერფინის ID: =0'],
                    en: ['Import: Bank of Georgia', 'Bank import: Need to look', 'Status: Need to clarify', 'Superfin ID: =0'],
                    ru: ['Импорт: Банк Грузии', 'Банк Импорт: Нужно посмотреть', 'Выполненный: Нет', 'Статус: Нужно Выяснить', 'Суперфин ID: =0']
                },
                searchInTurnover: {
                    ka: 'ძებნა ბრუნვაში',
                    en: 'Search in turnover',
                    ru: 'Поиск в оборот'
                },
                searchInTurnoverOptions: {
                    ka: ['ბრუნვა: !=0', 'ნაშთი: !=0'],
                    en: ['Turnover: !=0', 'Оборот: !=0'],
                    ru: ['Оборот: !=0', 'Остаток: !=0']
                },
                searchInRemains: {
                    ka: 'ძებნა ნაშთებში',
                    en: 'Search in balances',
                    ru: 'Поиск в останках'
                },
                searchInRemainsOptions: {
                    ka: ['ნაშთი: !=0'],
                    en: ['Оборот: !=0'],
                    ru: ['Остаток: !=0']
                },
                searchInAccounts: {
                    ka: 'ძებნა ანგარიშებში',
                    en: 'Search in accounts',
                    ru: 'Поиск в учетных записях'
                },
                searchInAccountsOptions: {
                    ka: ['მდგომარეობა: გასარკვევი'],
                    en: ['Status: Need to clarify'],
                    ru: ['Статус: Нужно Выяснить']
                },
                searchInInvoices: {
                    ka: 'ძებნა ანგარიშ-ფაქტურებში',
                    en: 'Search in invoices',
                    ru: 'Поиск в счет-фактурах'
                },
                searchInInvoicesOptions: {
                    ka: ['გასარკვევი: კი', 'ავანსი: დაწყვილებული', 'ავანსი: დასაწყვილებელი'],
                    en: ['Need to clarify: Yes', 'Advance payment: Paired', 'Advance payment: To be paired'],
                    ru: ['Нужно Выяснить: Да', 'Аванс: Парный', 'Аванс: Для соединения в паре']
                },
                searchInSubscriptions: {
                    ka: 'ძებნა გამოწერებში',
                    en: 'Search in subscriptions',
                    ru: 'Поиск в подписках'
                },
                searchInModels: {
                    ka: 'ძებნა მოდელებში',
                    en: 'Search in models',
                    ru: 'Поиск в моделях'
                },
                searchInReports: {
                    ka: 'ძებნა ანგარიშგებებში',
                    en: 'Search in reports',
                    ru: 'Поиск в отчетах '
                },
                subscriptions: {
                    ka: 'გამოწერები',
                    en: 'Subscriptions',
                    ru: 'Подписки'
                },
                subscriptionType: {
                    ka: 'გამოწერის ტიპი',
                    en: 'Subscription type',
                    ru: 'Тип подписки'
                },
                emailLanguage: {
                    ka: 'ელ. ფოსტის ენა',
                    en: 'Email Language',
                    ru: 'Язык Эл. адресов'
                },
                subscriptionFrequencies: {
                    ka: 'გამოწერის სიხშირე',
                    en: 'Subscription frequency',
                    ru: 'Повторение подписки'
                },
                sendTestSubscriptions: {
                    ka: 'სატესტო მეილის გაგზავნა',
                    en: 'Sending Test Email',
                    ru: 'Отправка тестового электронного письма'
                },
                sendTestSubscriptionsDay: {
                    ka: 'წინა დღის სატესტო მეილის გაგზავნა',
                    en: 'Sending Test Email of the previous day',
                    ru: 'Отправка тестового электронного письма предыдущего дня'
                },
                sendTestSubscriptionsWeek: {
                    ka: 'წინა კვირის სატესტო მეილის გაგზავნა',
                    en: 'Sending Test Email of the previous week',
                    ru: 'Отправка тестового электронного письма предыдущей недели'
                },
                sendTestSubscriptionsYear: {
                    ka: 'წინა თვის სატესტო მეილის გაგზავნა',
                    en: 'Sending Test Email of the previous month',
                    ru: 'Отправка тестового электронного письма предыдущего месяца'
                },
                subscriptionsFrequencyInfo: {
                    ka: 'გამოწერა უზრუნველყოფს დღის, კვირის ან თვის შესაბამისი ინფორმაციის ავტომატურად გაგზავნას მითითებულ მეილზე, ყოველ მომდევნო დღეს, ყოველი მომდევნო კვირის ან ყოველი მომდევნო თვის მითითებულ დღეს',
                    en: 'The Subscription ensures that the relevant information of the day, week or month is automatically sent to the specified email, every other day, on the specified day of every other week or every other month',
                    ru: 'Подписка обеспечивает автоматическую отправку соответствующей информации на указанный Эл. адрес, в каждый следующий день, в указанный день каждой следующей недели или каждого следующего месяца'
                },
                sendTestSubscriptionsStarted: {
                    ka: 'დაიწყო ელ. ფოსტაზე გასაგზავნი ინფორმაციის ფორმირება, რომელსაც დასრულებისთანავე მიიღებთ მისამართზე - {0}',
                    en: 'Information to be sent to email is being generated, upon completion you will receive it at the following address - {0}',
                    ru: 'Началось формирование информации для отправки на электронную почту, которую после завершения вы получите по адресу - {0}'
                },
                projects: {
                    ka: 'პროექტები',
                    en: 'Projects',
                    ru: 'Проекты'
                },
                project: {
                    ka: 'პროექტი',
                    en: 'Project',
                    ru: 'Проект'
                },
                allProjects: {
                    ka: 'ყველა პროექტი',
                    en: 'All Projects',
                    ru: 'Все Проекты'
                },
                selectProject: {
                    ka: 'პროექტის არჩევა',
                    en: 'Choose Project',
                    ru: 'Выберите Проект'
                },
                balance: {
                    ka: 'საბალანსო',
                    en: 'Balance sheet',
                    ru: 'Балансовый отчет'
                },
                notBalance: {
                    ka: 'არასაბალანსო',
                    en: 'Off balance sheet',
                    ru: 'Забалансовый отчет'
                },
                chooseProject: {
                    ka: 'აირჩიეთ - პროექტი',
                    en: 'Choose - Project',
                    ru: 'Выбери - Проект'
                },
                updateLInkedProgramError: {
                    ka: 'gss.ge პორტალთან დასაკავშირებლად გთხოვთ განაახლოთ პროგრამა',
                    en: 'Please, update the program to connect to the gss.ge portal',
                    ru: 'Пожалуйста, обновите программу для подключения к порталу gss.ge'
                },
                superfin: {
                    ka: 'სუპერფინი',
                    en: 'Superfin',
                    ru: 'Суперфин'
                },
                fromSuperfin: {
                    ka: 'სუპერფინიდან',
                    en: 'from Superfin',
                    ru: 'из Суперфина'
                },
                MeetSuperFin: {
                    ka: 'გაეცანი ვებ-სუპერფინს',
                    en: 'Meet Web-Superfin',
                    ru: 'Узнаете Веб-Суперфин'
                },
                MeetSuperFin_Title: {
                    ka: 'გაეცანი ვებ-სუპერფინს | ბუღალტერიის სრული სერვისი',
                    en: 'Meet Web-Superfin pricing | Full accounting service',
                    ru: 'Узнаете Веб Суперфин | Полное бухгалтерское обслуживание'
                },
                MeetSuperFin_Description: {
                    ka: 'ნებისმიერი ზომის ორგანიზაციის ბუღალტერია',
                    en: 'Accounting for organization of any size',
                    ru: 'Бухгалтерия для организации любого размера'
                },
                Description_Description: {
                    ka: 'კავშირი ბანკებთან, rs.ge-თან, სხვა პროგრამებთან',
                    en: 'Connection with banks, rs.ge and programs',
                    ru: 'Связь с банками, рс.ге и программами'
                },
                Prices_Description: {
                    ka: 'უფასოა ერთი მომხმარებლისთვის',
                    en: 'Free for one user',
                    ru: 'Бесплатно для одного пользователя'
                },
                Support_Title: {
                    ka: 'მომხმარებელთა მხარდაჭერა',
                    en: 'Customer support',
                    ru: 'Служба поддержки'
                },
                Support_Description: {
                    ka: 'გეხმარებით 8/5 ორშ-პარ 10:00-18:00',
                    en: 'We can help 8/5 Mon-Fri 10: 00-18: 00',
                    ru: 'Поможем вам 8/5 Пн-Пт 10:00-18:00'
                },
                Instructions_Description: {
                    ka: 'როგორ იმუშაო',
                    en: 'How to work',
                    ru: 'Как работать'
                },
                uploadGoodsInWaybillBy: {
                    ka: 'ზედნადებში საქონელი გაიგზავნოს',
                    en: 'Upload goods in waybill',
                    ru: 'Загрузить товары в накладной'
                },
                byCode: {
                    ka: 'კოდით',
                    en: 'by code',
                    ru: 'по коду'
                },
                byBarCode: {
                    ka: 'შტრიხკოდით',
                    en: 'by barcode',
                    ru: 'по штрих-коду'
                },
                series: {
                    ka: 'სერია',
                    en: 'Series',
                    ru: 'Серия'
                },
                term: {
                    ka: 'ვადა',
                    en: 'Term',
                    ru: 'Срок'
                },
                manufacturer: {
                    ka: 'მწარმოებელი',
                    en: 'Manufacturer',
                    ru: 'Производитель'
                },
                rsgeConnectionError: {
                    ka: 'არ მყარდება კავშირი rs.ge სერვისთან\nშეამოწმეთ პარამეტრებში rs.ge სერვისის\nმომხმარებლის სახელი და პაროლი',
                    en: 'Can not connect to rs.ge service\nCheck rs.ge service user name and password\nin options',
                    ru: 'Не удается установить соединение с сервисом rs.ge\nПроверьте в параметрах\nимя и пароль rs.ge сервис пользователя',
                },
                rsgeInvoiceUploadedDeletedError: {
                    ka: 'ანგარიშ-ფაქტურის ატვირთვა შეუძლებელია, რადგან იგი წაშლილია.\nმოხდა სინქრონიზაცია და განახლდა ანგარიშ-ფაქტურის სტატუსი',
                    en: 'Unable to upload invoice, because it has been deleted.\nSynchronization has been occurred and invoice status updated',
                    ru: 'Загрузить счет-фактуру невозможно, потому что она уже удалена.\nПроизошла синхронизация и обновлен статус счет-фактуры',
                },
                rsgeInvoiceUploadedError: {
                    ka: 'ანგარიშ-ფაქტურის ატვირთვა შეუძლებელია, რადგან იგი გადაგზავნილია კლიენტთან.\nმოხდა სინქრონიზაცია და განახლდა ანგარიშ-ფაქტურის სტატუსი',
                    en: 'Unable to upload invoice, because it has been forwarded to the client.\nSynchronization has been occurred and invoice status updated',
                    ru: 'Загрузить счет-фактуру невозможно, потому что она уже отправлена клиенту.\nПроизошла синхронизация и обновлен статус счет-фактуры',
                },
                rsgeInvoiceUploadedWayBillStatusError: {
                    ka: 'ანგარიშ-ფაქტურა გაიგზავნა არასრული სახით, რადგანაც მასში მონაწილეობს პროგრამა სუპერფინიდან ამოტვირთული გასავლის ზედდებულის (რეალიზაციის) საბუთი ID={0}, რომელიც არ არის RS.GE-ზე აქტიური ან დასრულებული სტატუსით.\nმოხდა სინქრონიზაცია და განახლდა ანგარიშ-ფაქტურის სტატუსი',
                    en: 'The invoice is sent incompletely, because it contains a Consignment Note ID={0} transferred from Superfin Software, which does not have active or complete status on RS.GE.\nSynchronization has occurred and invoice status is updated',
                    ru: 'Счет-фактура отправлена неполноценно, потому что в нем участвует Товарная Накладная (Реализация) ID={0}, перенесенная с программы Суперфин, которого нет на RS.GE активним или завершенным статусом.\nПроизошла синхронизация и обновлен статус счет-фактуры',
                },
                rsgeInvoiceUploadedWayBillAttacheError: {
                    ka: 'ანგარიშ-ფაქტურა გაიგზავნა არასრული სახით, რადგანაც მასში მონაწილეობს სუპერფინიდან ამოტვირთული გასავლის ზედდებულის (რეალიზაციის) საბუთი ID={0}, რომელიც RS.GE-ზე შესაძლებელია მონაწილეობდეს სხვა ანგარიშ-ფაქტურაში.\nმოხდა სინქრონიზაცია და განახლდა ანგარიშ-ფაქტურის სტატუსი',
                    en: 'The invoice is sent incompletely, because it contains a Consignment Note ID={0} transferred from Superfin Software, which could be included in other invoice on RS.GE.\nSynchronization has occurred and invoice status is updated',
                    ru: 'Счет-фактура отправлена неполноценно, потому что в нем участвует Товарная Накладная ID={0}, перенесенная с программы Суперфин, который может участвовать в другой счет-фактуре на RS.GE.\nПроизошла синхронизация и обновлен статус счет-фактуры',
                },
                rsgeInvoiceUploadUnknownError: {
                    ka: 'ანგარიშ-ფაქტურა გაიგზავნისას მოხდა შეცდომა.\nგთხოვთ შეამოწმოთ rs.ge პორტალის გამართულობა',
                    en: 'An error occurred while sending the invoice.\nPlease check if the rs.ge portal works without delay',
                    ru: 'Произошла ошибка при отправке счета-фактуры.\nПожалуйста проверьте, что портал rs.ge работает без задержек',
                },
                importExcelRequiredHeaders: {
                    ka: 'არ მოიძებნა სვეტ(ებ)ი დასახელებით',
                    en: 'No column(s) found with the name',
                    ru: 'Не найдена(ы) колонна с именем'
                },
                importGoodsExcelNonAccessibleRecords: {
                    ka: 'ექსელის ფაილში საქონელს არ აქვთ მითითებული',
                    en: 'In Excel file, goods are not specified',
                    ru: 'В файле Excel к товаром не указаны'
                },
                userRightsDistributionInstruction: {
                    ka: 'უფლებების განაწილების ინსტრუქცია',
                    en: 'Instruction for User Rights Distribution',
                    ru: 'Инструкция по распределению прав пользователей'
                },
                ChiefAccountant: {
                    ka: 'მთავარი ბუღალტერი',
                    en: 'Chief Accountant',
                    ru: 'Главный Бухгалтер'
                },
                Accountant: {
                    ka: 'ბუღალტერი',
                    en: 'Accountant',
                    ru: 'Бухгалтер'
                },
                Administrator: {
                    ka: 'ადმინისტრატორი',
                    en: 'Administrator',
                    ru: 'Администратор'
                },
                Manager: {
                    ka: 'მენეჯერი',
                    en: 'Manager',
                    ru: 'Менеджер'
                },
                Managers: {
                    ka: 'მენეჯერები',
                    en: 'Managers',
                    ru: 'Менеджеры'
                },
                processingAuthorizationAdding: {
                    ka: 'მიმდინარეობს ავტორიზაცია და დამატება',
                    en: 'Processing authorization and addition',
                    ru: 'Идет авторизация и добавления'
                },
                billingAndPurchasedServices: {
                    ka: 'გადახდა და შეძენილი სერვისები',
                    en: 'Billing and Purchased Services',
                    ru: 'Платеж и Приобретенные услуги'
                },
                billingAndPurchasedServiceInstruction: {
                    ka: 'გადახდა და შეძენილი სერვისების ინსტრუქცია',
                    en: 'Instruction for Billing and Purchased Services',
                    ru: 'Инструкция по Платеж и Приобретенные услуги'
                },
                currentUserIsNotChiefAccountant: {
                    ka: 'მიმდინარე მომხმარებელი არ არის \'მთავარი ბუღალტერი\'',
                    en: 'The current user is not an \'Chief Accountant\'',
                    ru: 'Текущий пользователь не является \'Главный Бухгалтер\''
                },
                AccountsPlan: {
                    ka: 'ანგარიშთა გეგმა',
                    en: 'Accounts plan',
                    ru: 'План счетов'
                },
                accountPath: {
                    ka: 'ანგარიშის ID გზა',
                    en: 'Account ID path',
                    ru: 'ID путь учетной записи'
                },
                Active: {
                    ka: 'აქტიური',
                    en: 'Active',
                    ru: 'Активный'
                },
                Passive: {
                    ka: 'პასიური',
                    en: 'Passive',
                    ru: 'Пассивный'
                },
                ActivePassive: {
                    ka: 'აქტიურ-პასიური',
                    en: 'Active-Passive',
                    ru: 'Активно-пассивный'
                },
                OffBalance: {
                    ka: 'ბალანსგარეშე',
                    en: 'Off Balance',
                    ru: 'Вне баланса'
                },
                accountNumber: {
                    ka: 'ანგარიშის ნომერი',
                    en: 'Account number',
                    ru: 'Номер счета'
                },
                accountNumberExist: {
                    ka: 'ანგარიში მითითებული ნომრით უკვე არსებობს',
                    en: 'Account with the specified number already exists',
                    ru: 'Счет с указанным номером уже существует'
                },
                accountNotExist: {
                    ka: '\'{0}\' - ანგარიში არ მოიძებნა',
                    en: '\'{0}\' - account not found',
                    ru: '\'{0}\' - счет не найден'
                },
                parentAccount: {
                    ka: 'მშობელი ანგარიში',
                    en: 'Parent account',
                    ru: 'Родительский счет'
                },
                parentAccountIsDeleted: {
                    ka: 'ანგარიში არ განახლდება, მისი ანგარიშის მშობელი ანგარიში წაშლილია',
                    en: 'The account will not be updated, its account’s parent account has been deleted',
                    ru: 'Счет не будет обновлен, родительский счет его счета удален'
                },
                accountCanNotDeleteSubAccountError: {
                    ka: '{0} - ანგარიში არ წაიშლება, რადგან არსებობს მისი ქვეანგარიშები',
                    en: '{0} - account can not be deleted, as its sub accounts exist',
                    ru: '{0} - счет не может быть удален, так как существуют его субсчета'
                },
                accountCanNotDeleteAttachmentError: {
                    ka: '{0} - ანგარიში არ წაიშლება, რადგან არსებობს მასზე მიმაგრებული ფაილები',
                    en: '{0} - account will not be deleted, as there exist files attached to it',
                    ru: '{0} - счет не может быть удален, так как существуют прикрепленные файлы к нему'
                },
                accountCanNotArchiveError: {
                    ka: 'ანგარიში არ დაარქივდება, რადგან მისი ყველა ქვეანგარიში დაარქივებული არ არის',
                    en: 'The account will not be archived because not all of its sub-accounts are archived',
                    ru: 'Счет не будет заархивирован, потому что не все его субсчеты заархивированы'
                },
                accountCanNotDeleteTransactionError: {
                    ka: '{0} - ანგარიში არ წაიშლება, რადგან არსებობს მისი ტრანზაქციები',
                    en: '{0} - account cannot be deleted, as its transactions exist',
                    ru: '{0} - счет не может быть удален, так как существуют его проводок'
                },
                accountCanNotDeleteStartRemainsError: {
                    ka: '{0} - ანგარიში არ წაიშლება, რადგან არსებობს მისი საწყისი ნაშთები',
                    en: '{0} - account cannot be deleted, as its opening balances exist',
                    ru: '{0} - счет не может быть удален, так как существуют его начальные остатки'
                },
                accountCanNotAddStartRemainOnFolderError: {
                    ka: 'საწყისი ნაშთ(ებ)ის დამატება შეუძლებელია. ანგარიშს {0} გააჩნია ქვეანგარიშები',
                    en: 'Unable to add opening balance\'s. The account {0} has sub-accounts',
                    ru: 'Невозможно добавить начальный остаток(и). В счете {0} есть субсчета'
                },
                accountCanNotAddParentHasRemainsError: {
                    ka: 'მითითებული ანგარიში არ დაემატება, რადგან \'{0}\' ანგარიშზე არსებობს საწყისი ნაშთ(ებ)ი',
                    en: 'Specified account cannot be added, because of the existing opening balance\'s on the account \'{0}\'',
                    ru: 'Указанный счет не может быть добавлен, из-за существующего начального остаток(и) на счете \'{0}\''
                },
                accountCanAddOnlyFromSuperfinProgram: {
                    ka: 'ანგარიშის დამატება შესაძლებელია მხოლოდ პროგრამა სუპერფინში',
                    en: 'Adding an account is possible only in the SuperFin Software',
                    ru: 'Добавление счета возможно только в программе Суперфин'
                },
                accountCanEditOnlyFromSuperfinProgram: {
                    ka: 'ანგარიშის რედაქტირება შესაძლებელია მხოლოდ პროგრამა სუპერფინში',
                    en: 'Editing an account is possible only in the Superfin software',
                    ru: 'Редактирование счета возможно только в программе Суперфин'
                },
                accountCanDeleteOnlyFromSuperfinLinkedProgramAuthorized: {
                    ka: 'ანგარიშის წაშლა შესაძლებელია მხოლოდ პროგრამა სუპერფინში',
                    en: 'Deleting an account is possible only in the Superfin software',
                    ru: 'Удаление счета возможно только в программе Суперфин'
                },
                canNotFindAccountsForTransactionError: {
                    ka: 'საბუღალტრო გატარების შესასრულებლად\nID={0}\nმქონე ანგარიშ(ებ)ი არ იქნა ნაპოვნი',
                    en: 'To fulfill the accounting entry the account(s) with \nID={0}\ was (were) not found',
                    ru: 'Для исполнения бухгалтерской проводки счет(а) с \nID={0}\  не был найден(ы)'
                },
                authorizeLinkedProgramVisibleInRetail: {
                    ka: 'ვეთანხმები, ‘საცალო გაყიდვაც’ დაკავშირდეს პროგრამა სუპერფინთან და პროგრამა სუპერფინთან ავტომატური სინქრონიზაციის დაწყებისას, შეტანილი ინფორმაცია წაიშალოს',
                    en: 'I agree to connect ‘Retail Sales‘ to the Superfin Software too and that upon the start of automatic synchronization with the Superfin Software, the entered information be deleted',
                    ru: 'Я согласен, что-бы и ‘Розничные Продажи‘ подключилась к программе Суперфин и с началом автоматической синхронизации с программой Суперфин, удалилась внесенная информация'
                },
                authorizeLinkedProgramExist_v2: {
                    ka: "ვეთანხმები, ‘ვებ-სუპერფინიც’ დაკავშირდეს პროგრამა სუპერფინთან და პროგრამა სუპერფინთან ავტომატური სინქრონიზაციის დაწყებისას, შეტანილი ინფორმაცია გახდეს 'გასარკვევი' და შემოწმდეს",
                    en: "I agree to connect 'Web-Superfin' to Superfin Software and upon automatic synchronization entered information will be marked as 'Need to Clarify' and checked",
                    ru: "Я согласен что-бы «Web-Superfin» был подключен к программе Superfin и после автоматической синхронизации введенная информация будет отмечена отметкой 'Нужно Выяснить' и проверена"
                },

                linkedSuperfinMemoryEnabledInfo: {
                    ka: 'გამოიყენოს კლიენტის\n{0}\nპროგრამა სუპერფინის ერთი ორგანიზაციისთვის გამოყოფილი {1} GB მეხსიერება',
                    en: 'Use the allocated memory {1} GB for one organization of the SuperFin client\n{0}\nSoftware',
                    ru: 'Пусть использует выделенную память {1} GB для одной организации программы Суперфин клиента\n{0}'
                },
                linkedSuperfinMemoryNotEnabledInfo: {
                    ka: '{0}\nკლიენტის პროგრამა სუპერფინისთვის\nგამოყოფილი {1} GB მეხსიერება გამოიყენება ორგანიზაციაში ID: {2}',
                    en: 'The allocated memory {1} GB for the SuperFin\n{0}\nclient\'s Software is used in Organization ID {2}',
                    ru: 'Выделенная память {1} GB для программы Суперфин клиента\n{0}\nиспользуется в Организации ID: {2}'
                },

                linkedProgramReceivedAPICode: {
                    ka: 'მიღებული დაკავშირების კოდი (API Code)',
                    en: 'Received connection code (API Code)',
                    ru: 'Полученный код подключения (API Code)'
                },
                linkedProgramReceiveLink: {
                    ka: 'კავშირის მიღება',
                    en: 'Receive connection',
                    ru: 'Получить подключение'
                },
                linkedProgramSendAPICode: {
                    ka: 'დაკავშირების კოდის (API Code) გაგზავნა',
                    en: 'Send connection code (API Code)',
                    ru: 'Отправить код подключения (API Code)'
                },
                linkedProgramAPIConnectionCodeSent: {
                    ka: '<b>{0}</b> - გაგზავნილია დაკავშირების კოდი (API Code)',
                    en: 'Connection code (API Code) has been sent to - <b>{0}</b>',
                    ru: 'Код подключения (API Code) отправлен - <b>{0}</b>'
                },
                linkedProgramAPIDeletionCodeSent: {
                    ka: '<b>{0}</b> - გაგზავნილია კავშირის წაშლის (API Code)',
                    en: 'Connection deletion (API Code) has been sent - <b>{0}</b> ',
                    ru: '(API Code) удаление подключения отправлен - <b>{0}</b> '
                },
                authorizeLinkedProgramDeleteInfo_1_1: {
                    ka: 'ვეთანხმები, პროგრამა სუპერფინთან ხელახალი დაკავშირების შემთხვევაში, ავტომატური სინქრონიზაციის დაწყებისას',
                    en: 'I agree that in the case of reconnecting with SuperFin Software, with the start of auto-synchronization',
                    ru: 'Я согласен, что в случае повторного соединения с Суперфин, с началом запуска автосинхронизации'
                },
                authorizeLinkedProgramDeleteInfo_1_2: {
                    ka: 'ვეთანხმები \'API სერვისთან\' კავშირის წაშლას',
                    en: 'I agree to delete the connection with the \'API service\'',
                    ru: 'Я согласен удалить подключение к \'сервису API\''
                },
                authorizeLinkedProgramDeleteInfo_2: {
                    ka: 'superfin.gss.ge პორტალზე შეტანილი ინფორმაცია წაიშალოს',
                    en: 'the information on the superfin.gss.ge portal will be deleted',
                    ru: 'информация на портале superfin.gss.ge удалилась'
                },
                authorizeLinkedProgramDeleteInfo_2_v2: {
                    ka: "superfin.gss.ge პორტალზე შეტანილი ინფორმაცია გახდეს 'გასარკვევი' და შემოწმდეს",
                    en: "Information entered to superfin.gss.ge portal will be marked as 'Need to Clarify' and checked",
                    ru: "Информация, введенная на портал superfin.gss.ge, будет отмечена пометкой 'Нужно Выяснить' и проверена"
                },
                authorizeLinkedProgramDeleteInfo_3: {
                    ka: ' და ',
                    en: ' and ',
                    ru: ' и '
                },
                authorizeLinkedProgramDeleteInfo_4: {
                    ka: 'retail.gss.ge პორტალზე სინქრონიზაციისას, საქონლის დაკავშირება განხორციელდეს დასახელებისა და კოდის მიხედვით',
                    en: 'during synchronization on the retail.gss.ge portal, connection with the goods was carried out by names and codes',
                    ru: 'во время синхронизации c программой retail.gss.ge, связь с продуктами осуществилось по наименованиям и кодам'
                },
                syncSfBigDocumentsError: {
                    ka: '{0}\n\nსაბუთს გააჩნია 300-ზე მეტი\nსაბუღალტრო გატარება,\n\nშეუძლებელია მისი superfin.gss.ge-ზე შესრულება.\n\nგთხოვთ, შეტანილი ინფორმაცია გაანაწილოთ რამდენიმე საბუთში.',
                    en: '{0}\n\nThe document has more than 300 accounting entries,\n\nit is impossible to execute it on superfin.gss.ge.\n\nPlease, distribute the entered information in several documents.',
                    ru: '{0}\n\nДокумент имеет более 300 бухгалтерских проводков,\n\nего невозможно исполнить на superfin.gss.ge.\n\n Пожалуйста, распределить внесенную информацию в нескольких документах.'
                },
                documentsDownloadLimitError: {
                    ka: 'სრული ინფორმაცია განაწილებულია ექსელის ერთ ან მეტ ფაილში. მოთხოვნილი ჩანაწერების რაოდენობამ მიაღწია \'MS ექსელის\' სტრიქონების ლიმიტს - {0}',
                    en: 'Complete information is distributed in one or more Excel files. The number of requested records has reached \'MS Excel\' row limit - {0}',
                    ru: 'Полная информация распределен в одном или нескольких файлах Excel. Количество запрошенных заметок достигло \'MS Excel\' лимит строки - {0}'
                },
                requestedDownloadStarted: {
                    ka: 'დაიწყო მოთხოვნილი ჩამოტვირთვის შესრულება',
                    en: 'The requested download has started',
                    ru: 'Запрошенная загрузка началась'
                },
                requestedDownloadHasStarted: {
                    ka: 'მიმდინარეობს {0} მიერ მოთხოვნილი ჩამოტვირთვის შესრულება',
                    en: 'The download requested by {0} is in progress',
                    ru: 'Выполняется загрузка, запрошенная {0}'
                },
                downloadTheRequestedExcel: {
                    ka: 'ჩამოტვირთე მოთხოვნილი - {0}',
                    en: 'Download the requested - {0}',
                    ru: 'Скачать запрашиваемые - {0}'
                },
                linkIsExpired: {
                    ka: 'ბმულის მოქმედების ვადა ამოიწურა',
                    en: 'Link is expired',
                    ru: 'Срок действия ссылки истек'
                },
                projectCanNotDeleteError: {
                    ka: 'მითითებული პროექტი არ წაიშლება, რადგან ის გამოიყენება საბუთებში',
                    en: 'The specified project will not be deleted, because it is used in documents',
                    ru: 'Указанный проект не будет удален, потому что используется в документах'
                },
                projectCanNotDeleteTransactionError: {
                    ka: 'მითითებული პროექტი არ წაიშლება, რადგან არსებობს მისი ტრანზაქციები',
                    en: 'Specified project cannot be deleted, as its transactions exist',
                    ru: 'Указанный проект не может быть удален, так как существуют его проводок'
                },
                projectCanNotDeleteStartRemainsError: {
                    ka: 'მითითებული პროექტი არ წაიშლება, რადგან არსებობს მისი საწყისი ნაშთები',
                    en: 'Specified project cannot be deleted, as its opening balances exist',
                    ru: 'Указанный проект не может быть удален, так как существуют его начальные остатки'
                },
                BuyerName: {
                    ka: `მყიდველის სახელი`,
                    en: `Buyer's name`,
                    ru: `Имя покупателя`
                },
                CustomerName: {
                    ka: `მომწოდებლის სახელი`,
                    en: `Supplier's name`,
                    ru: `Название поставщика`
                },
                money: {
                    ka: `თანხა`,
                    en: `money`,
                    ru: `деньги`
                },
                incVat: {
                    ka: `მშ. დღგ`,
                    en: `incl. Vat`,
                    ru: `вкл. НДС`
                },
                Vat: {
                    ka: 'დღგ',
                    en: 'Vat',
                    ru: 'НДС'
                },
                RateForVat: {
                    ka: 'განაკვეთი',
                    en: 'Rate',
                    ru: 'Ставка'
                },
                VatRate: {
                    ka: 'დღგ-ის განაკვეთი',
                    en: 'Vat rate',
                    ru: 'Ставка НДС'
                },
                DocumentsIDDateSubjectAmountVat: {
                    ka: `საბუთები - ID/თარიღი/თემა/თანხა - <b class="deep-orange-text text-accent-2">{0}</b> / მშ. დღგ - <b class="deep-orange-text accent-2-text">{1}</b>`,
                    en: `Documents - ID/Date/Subject/Amount - <b class="deep-orange-text text-accent-2">{0}</b> / incl. Vat - <b class="deep-orange-text accent-2-text">{1}</b>`,
                    ru: `Документы - ID/Дата/Тема/Сумма - <b class="deep-orange-text text-accent-2">{0}</b> / вкл. НДС - <b class="deep-orange-text accent-2-text">{1}</b>`
                },
                refreshDocuments: {
                    ka: `საბუთების განახლება`,
                    en: `Refresh documents`,
                    ru: `Обновить документы`
                },
                PayableVATForAdvancePaymentListTitle: {
                    ka: `მდგომარეობა-ID-ნომერი-დეკლარაციის N-ოპერაციის თვე/თანხა/მშ დღგ/დაწყვილებული დღგ`,
                    en: `Status-ID-Number-Declaration N-Operation month/Amount/incl. VAT/Paired VAT`,
                    ru: `Статус-ID-Номер-Декларация N-Месяц операции/НДС/Сумма/вкл. НДС/Парный НДС`
                },
                DeliveryVATOfAdvancePaymentListTitle: {
                    ka: `მდგომარეობა-ID-ნომერი-დეკლარაციის N-ოპერაციის თვე/თანხა/მშ დღგ/დაწყვილებული დღგ/დასაწყვილებელი დღგ`,
                    en: `Status-ID-Number--Declaration N-Operation month/Amount/incl. VAT/Paired VAT/VAT to be paired`,
                    ru: `Статус-ID-Номер-Декларация N-Месяц операции/НДС/Сумма/вкл. НДС/Парный НДС/НДС для соединения в паре`
                },
                RefreshAdvancePaymentInvoices: {
                    ka: 'ავანსის ანგარიშ-ფაქტურების განახლება',
                    en: 'Refresh advance payment invoices',
                    ru: 'Обновить счет-фактуры аванса'
                },
                SumPairedVatMoreThenVatError: {
                    ka: 'ID={0} - ანგარიშ-ფაქტურის დღგ ნაკლებია უკვე დაწყვილებულ დღგ-ზე',
                    en: 'VAT of the invoice ID={0} is less than the paired VAT',
                    ru: 'НДС счет-фактуры ID={0} меньше парного НДС'
                },
                paired: {
                    ka: 'დაწყვილებული',
                    en: 'Paired',
                    ru: 'Парный'
                },
                toBePaired: {
                    ka: 'დასაწყვილებელი',
                    en: 'To be paired',
                    ru: 'Для соединения в паре'
                },
                enableSyncCheck: {
                    ka: 'მონაწილეობს ა/ფ-ების ერთიანად სინქრონიზაცია-ატვირთვაში',
                    en: 'Participates in joint synchronization-upload of invoices',
                    ru: 'Участвует в совместной синхронизации-выгрузке счет-фактур'
                },
                lastDocTurnOverDate: {
                    ka: 'ბოლო საბუთის ბრუნვის თარიღი',
                    en: 'Last document’s turnover date',
                    ru: 'Число оборота последнего документа'
                },
                downloadableInvoices: {
                    ka: 'ჩამოსატვირთი მომსახურების ანგარიშ-ფაქტურები',
                    en: 'Downloadable invoices for services',
                    ru: 'Загружаемые счета-фактуры для услуг'
                },
                uploadingInvoicesAccounts: {
                    ka: 'ასატვირთი ანგარიშ-ფაქტურების ანგარიშები',
                    en: 'Accounts of invoices for uploading',
                    ru: 'Счеты счет-фактур для загрузки'
                },
                forAdvance: {
                    ka: 'ავანსის',
                    en: 'On advance payment',
                    ru: 'На аванс'
                },
                forDelivery: {
                    ka: 'მიწოდების',
                    en: 'On delivery',
                    ru: 'На поставку'
                },
                forAdvanceDelivery: {
                    ka: 'ავანსზე მიწოდების',
                    en: 'On delivery for advance payment',
                    ru: 'На поставку на аванс'
                },
                deliveryInvoice: {
                    ka: 'მიწოდების ანგარიშ-ფაქტურა',
                    en: 'Delivery invoice',
                    ru: 'Счет-фактура на поставку'
                },
                makeRsInvoiceByDocument: {
                    ka: 'ანგარიშ-ფაქტურა შეიქმნას ინდივიდუალურად თითოეულ საბუთზე',
                    en: 'Create an invoice individually for each document',
                    ru: 'Создавать счет-фактуру индивидуально для каждого документа'
                },
                advancePaymentInvoice: {
                    ka: 'ავანსის ანგარიშ-ფაქტურა',
                    en: 'Advance payment invoice',
                    ru: 'Счет-фактура аванса'
                },
                deliveryInvoiceForAdvancePayment: {
                    ka: 'ავანსზე მიწოდების ანგარიშ-ფაქტურა',
                    en: 'Delivery invoice for advance payment',
                    ru: 'Счет-фактура поставки на аванс'
                },
                deliveryInvoices: {
                    ka: 'მიწოდების ანგარიშ-ფაქტურები',
                    en: 'Delivery invoices',
                    ru: 'Счет-фактура на поставку'
                },
                advancePaymentInvoices: {
                    ka: 'ავანსის ანგარიშ-ფაქტურები',
                    en: 'Advance payment invoices',
                    ru: 'Счет-фактуры аванса'
                },
                advancePaDeliveryInvoicesForAdvance: {
                    ka: 'ავანსზე მიწოდების ანგარიშ-ფაქტურები',
                    en: 'Delivery invoices for advance payment',
                    ru: 'Счет-фактуры поставок на аванс'
                },
                advancesReceived: {
                    ka: "მიღებული ავანსები",
                    en: "Advances received",
                    ru: "Полученные авансы"
                },
                sourceOfAdvance: {
                    ka: 'მიღებული ავანსების წყარო',
                    en: 'The source of the received advance payments',
                    ru: 'Источник полученных авансов'
                },
                vatAdvance: {
                    ka: 'მშ. ავანსის დღგ',
                    en: 'Incl. VAT advance',
                    ru: 'Вкл. НДС аванса'
                },
                invoicesOperationInstruction: {
                    ka: 'ანგარიშ-ფაქტურის გატარებების მაგალითები',
                    en: 'Examples of invoice\'s entries',
                    ru: 'Примеры проводок счет-фактуры'
                },
                invoiceOptions_title: {
                    ka: '\'RS ანგარიშ-ფაქტურა\' იქმნება:',
                    en: '\'RS invoice\' is generated:',
                    ru: '\'RS счет-фактура\' создается:'
                },
                invoiceOptions: {
                    ka: '\'საბუღალტრო ოპერაციებისა\' და \'გასავლის ზედდებულების\' საფუძველზე;\n' +
                        'აღნიშნულ საბუთებში აუცილებლად უნდა მონაწილეობდეს გატარება \'მყიდველისა\' და \'რეალიზაციის\' ანგარიშების კორესპონდენციით (\'მიწოდების ანგარიშ-ფაქტურის\' შემთხვევაში), \'მიღებული ავანსებების წყაროსა\' და \'მიღებული ავანსების\' ანგარიშების კორესპონდენციით (\'ავანსის ანგარიშ-ფაქტურის\' შემთხვევაში) ან \'მიღებული ავანსისა\' და \'რეალიზაციის\' ანგარიშების კორესპონდენციით (\'ავანსზე მიწოდების ფაქტურის\' შემთხვევაში);\n' +
                        'გატარება დღგ-ის ანგარიშის მონაწილეობით შესაძლებელია არ იყოს (მაგ: გათავისუფლებული ოპერაციების შემთხვევაში);\n' +
                        '\'მყიდველის / \'მიღებული ავანსების\' ანგარიშებს მონაცემებში მითითებული უნდა ქონდეს \'მყიდველის დღგ-ის გადამხდელის ტიპი\' და ორგანიზაციის ან კერძო პირის საიდენტიფიკაციო / პირადი ნომერი;\n' +
                        'დღგ-ს ანგარიშს მონაცემებში მითითებული უნდა ქონდეს \'გადასახდელი დღგ - მიწოდებაზე\', \'გადასახდელი დღგ ავანსზე\' ან \'ავანსზე - მიწოდების დღგ\' ტიპი.',
                    en: 'Based on \'Accounting operations\' and \'Outgo waybills\'\n' +
                        'The mentioned documents must include the transaction with the correspondence between \'buyer\' and \'realization\' accounts (in case of the \'delivery invoice\'), the correspondence between \'source of the received advance payments\' and the \'received advance payment\' accounts (in case of the \'advance payment invoice\') or the correspondence between the \'received advance payment\' and \'realization\' accounts (in case of the \'delivery invoice for advance payment\');\n' +
                        'There may not be a transaction including the VAT account (e.g. in case of operations that are exempt);\n' +
                        'The accounts of buyer’s/\'received advance payments\' must include \'buyer’s VAT payer type\' and identification / personal number of the organization or a private person in the data;\n' +
                        'The VAT account data must include: the \'VAT payable – for delivery\', \'VAT payable for the advance payment\' or \'delivery invoice – for advance payment\' type.',
                    ru: 'На основании \'Бухгалтерских операции\' и \'Накладной расхода\'\n' +
                        'В указанных документах обязательно должны участвовать проводки с кореспонденцией между счетами \'покупателя\' и \'реализации\' (в случае \'счет-фактуры на доставку\'), с корреспонденцией между счетами \'источников полученных авансов\' и \'полученных авансов\' (в случае \'счет-фактуры на аванс\') или с корреспонденцией между счетами \'полученного аванса\' и \'реализации\' (в случае \'счет-фактуры поставки на аванс\');\n' +
                        'Может отсутствовать проводка с участием счета НДС (например, в случае операций, освобожденных от налога);\n' +
                        'В счетах \'полученных авансовых платежей\' покупателя в данных должны быть указаны \'тип плательщика НДС покупателя\' и идентификационный / личный номер организации или частного лица;\n' +
                        'Данные счета НДС должны включать: тип \'НДС подлежащий уплате - за поставку\', \'НДС подлежащий уплате за аванс\', или \'счет-фактуру поставки на аванс\'.'
                },
                TheTypeOfPayer: {
                    ka: 'გადამხდელის ტიპი',
                    en: 'Payer type',
                    ru: 'Тип плательщика'
                },
                RSAmount: {
                    ka: 'RS თანხა',
                    en: 'RS Amount',
                    ru: 'RS Сумма'
                },
                RSVat: {
                    ka: 'RS დღგ',
                    en: 'RS Vat',
                    ru: 'RS НДС'
                },
                fullNumber: {
                    ka: 'სრული ნომერი',
                    en: 'Full Number',
                    ru: 'Полный Номер'
                },
                balanceType: {
                    ka: 'საბალანსო ტიპი',
                    en: 'Balance Type',
                    ru: 'Балансовый Тип'
                },
                SubAccounts: {
                    ka: 'ქვეანგარიშები',
                    en: 'Sub-Accounts',
                    ru: 'Субсчета'
                },
                Main: {
                    ka: 'ძირითადი',
                    en: 'Main',
                    ru: 'Основной'
                },
                Folder: {
                    ka: 'საქაღალდე',
                    en: 'Folder',
                    ru: 'Папка'
                },
                Card: {
                    ka: 'ბარათი',
                    en: 'Card',
                    ru: 'Карта'
                },
                NewAccount: {
                    ka: 'ახალი ბარათი',
                    en: 'New Account',
                    ru: 'Новый Счет'
                },
                Zero: {
                    ka: 'ნულოვანი',
                    en: 'Zero',
                    ru: 'Нулевая'
                },
                NonZero: {
                    ka: 'არანულოვანი',
                    en: 'NonZero',
                    ru: 'Ненулевая'
                },
                All: {
                    ka: 'ყველა',
                    en: 'All',
                    ru: 'Все'
                },
                PermitRsInvoiceInfo: {
                    ka: 'ვეთანხმები ანგარიშ-ფაქტურის მითითებულ ინფორმაციას',
                    en: 'I agree with the information specified in the invoice',
                    ru: 'Я согласен с информацией, указанным в счете-фактуре'
                },
                RsInvoicesTitle_1: {
                    ka: `გამოწერის თარიღი/ნომერი/ორგანიზაცია/სტატუსი/მომსახურება-თემა/თანხა-დღგ-განზომილება`,
                    en: `Date of issue/Number/Organization/Status/Service-Subject/Amount-VAT-Dimension`,
                    ru: `Дата выписки/Номер/Организация/Статус/Сервис-Тема/Сумма-НДС-Измерение`
                },
                RsInvoicesTitle_2: {
                    ka: `ოპერაციის თარიღი-საბუთების ID/პირველი გატარების დებეტი/კრედიტი/მეორე გატარების დებეტი/კრედიტი/პროექტი`,
                    en: `Date of operation-ID of documents//Debit/Credit first entry/Debit/Credit second entry/Project`,
                    ru: `Дата операции-ID в документах/Дебет/Кредит первой проводки/Дебет/Кредит второй проводки/Проект`
                },
                choosePurposeType: {
                    ka: 'აირჩიეთ - დანიშნულება',
                    en: 'Choose - Purpose',
                    ru: 'Выберите - Назначения'
                },
                downloadableService: {
                    ka: 'ჩამოსატვირთი მომსახურება',
                    en: 'Downloadable service',
                    ru: 'Скачиваемый сервис'
                },
                isNotService: {
                    ka: 'არ არის მომსახურება (არ იტვირთება)',
                    en: 'No service (no downloadable)',
                    ru: 'Нет сервиса (не скачиваемый)'
                },
                attachedToDocument: {
                    ka: 'საბუთზე მიბმული (არ იტვირთება)',
                    en: 'Attached to document (no downloadable)',
                    ru: 'Прилагается к документу (не скачиваемый)'
                },
                OfferedInSimilarBankTransactionAccountInfo: {
                    ka: 'მსგავს ტრანზაქციებში შემომთავაზე',
                    en: 'Offer me in similar transactions',
                    ru: 'Предлагай мне в похожих транзакциях'
                },
                InSimilarTransactionsBankTransactionAccountInfo: {
                    ka: 'მსგავს ტრანზაქციებში',
                    en: 'In similar transactions',
                    ru: 'В похожих транзакциях'
                },
                OfferMeBankTransactionAccountInfo: {
                    ka: 'შემომთავაზე',
                    en: 'Offer me',
                    ru: 'Предлагай мне'
                },
                ChangeOfferMeBankTransactionAccountInfo: {
                    ka: 'შეთავაზების შეცვლა',
                    en: 'Change the offer',
                    ru: 'Изменить предложение'
                },
                DoNotOfferMeBankTransactionAccountInfo: {
                    ka: 'არ შემომთავაზო',
                    en: 'Do not offer me',
                    ru: 'Не предлагай мне'
                },
                UpdateEverywhere: {
                    ka: 'განახლდეს ყველგან',
                    en: 'Update everywhere',
                    ru: 'Обновит везде'
                },
                BanksTitle_1: {
                    ka: `თარიღი/ჩარიცხვა-გადარიცხვა/თანხა ძირითად ვალუტაში/თანხა/ვალუტა/პარტნიორის საიდენტიფიკაციო ნომერი-სახელი-ანგარიში ბანკში`,
                    en: `Date/Income-Transfer/Amount in the main currency/Amount/Currency/Partner Identification Number-Name-Bank Account`,
                    ru: `Дата/Доход-Перевод/Сумма в основной валюте/Сумма/Валюта/Идентификационный номер Партнера-Имя-Банковский счет`
                },
                BanksTitle_2: {
                    ka: `შინაარსი-საბუთის ნომერი/ანგარიში/ვალუტა/საბუთის თემა/პროექტი/`,
                    en: `Description-Document Number/Account/Currency/Document Subject/Project/`,
                    ru: `Содержание-Номер документа/Счет/Валюта/Тема документа/Проект/`
                },
                bankDocuments: {
                    ka: 'ბანკის საბუთები',
                    en: 'Bank documents',
                    ru: 'Банковские документы'
                },
                bankImport: {
                    ka: 'ბანკის იმპორტი',
                    en: 'Bank import',
                    ru: 'Импорт банка'
                },
                bankImportInstruction: {
                    ka: 'ბანკის იმპორტის ინსტრუქცია',
                    en: 'Bank import instruction',
                    ru: 'Инструкция импорта банка'
                },
                invoicesImportInstruction: {
                    ka: 'ანგარიშ-ფაქტურების იმპორტის ინსტრუქცია',
                    en: 'Instruction for invoice import',
                    ru: 'Инструкция по импорту счет-фактур'
                },
                partner: {
                    ka: 'პარტნიორი',
                    en: 'Partner',
                    ru: 'Партнер'
                },

                // ანგარიშგების ცვლადები და შეტყობინებები
                googleDriveReportsLink: {
                    ka: '\'ანგარიშგებების შაბლონები\' - Google Drive Excel-ში',
                    en: '\'Reports templates\' - Google Drive Excel',
                    ru: '\'Шаблоны отчетов\' Google Drive Excel'
                },
                googleDriveReportsDescription: {
                    ka: '<b>ანგარიშგებები Google Drive Excel</b>-ში - საშუალებას გაძლევთ ისარგებლოთ უკვე შექმნილი <b>\'ანგარიშგებების შაბლონებით\'</b>, ასევე შექმნათ თქვენთვის <b>სასურველი ნებისმიერი სახის</b> ანგარიშგება, რომელიც <b>ავტომატურად</b> შეივსება <b>ვებ-სუპერფინში არსებული ინფორმაციით</b>',
                    en: '<b>Reports in Google Drive Excel</b> allows you to use already created <b>\'reports\'</b>, as well as create <b>any type of report you want</b>, that will be <b>automatically</b> filled in <b>Web-Superfin with the existing information</b>',
                    ru: '<b>Отчеты в Google Drive Excel</b> позволяет использовать уже <b>\'созданные отчеты\'</b>, а также создавать <b>любые типы отчетов</b>, которые будут <b>автоматически</b> заполняться в <b>Веб-Суперфин существующей информации</b>'
                },
                howToUse: {
                    ka: 'როგორ გამოვიყენო',
                    en: 'How to use',
                    ru: 'Как использовать'
                },
                googleDriveReportsHowToUse_1: {
                    ka: 'დააკოპირეთ \'ანგარიშგების შაბლონი\'',
                    en: 'Copy the \'report template\'',
                    ru: 'Скопируйте \'шаблон отчета\''
                },
                googleDriveReportsHowToUse_2: {
                    ka: 'დააკავშირეთ ორგანიზაციას',
                    en: 'Connect with the Organization',
                    ru: 'Соедините с Организацией'
                },
                googleDriveReportsHowToUse_3: {
                    ka: 'დათვალეთ ანგარიშგება',
                    en: 'Count the report',
                    ru: 'Посчитайте отчет'
                },
                additionalCapabilities: {
                    ka: 'დამატებითი შესაძლებლობები',
                    en: 'Additional capabilities',
                    ru: 'Дополнительные возможности'
                },
                googleDriveReportsAdditionalCapabilities_1: {
                    ka: '<b>ნებისმიერი</b> ახალი <b>ანგარიშგების აწყობა</b> და ავტომატური შევსება',
                    en: '<b>Building</b> and automatic filling of <b>any new report</b>',
                    ru: '<b>Построение</b> и автоматическое заполнение <b>любого нового отчета</b>'
                },
                googleDriveReportsAdditionalCapabilities_2: {
                    ka: '<b>ვებ-ორგანიზაციის ანგარიშთა გეგმისა და ოპერაციების ექსპორტი</b>, სუპერფინში დასაიმპორტებელი ფორმატით',
                    en: '<b>Export of accounts plan and operations</b>, that can be imported into Superfin',
                    ru: '<b>Экспорт плана счетов и операций</b>, которые можно импортировать в Суперфин'
                },
                oldGoogleDriveReportsParametersLink: {
                    ka: 'ძველი ვერსიის გაუქმებულ ანგარიშგებებში - თქვენს მიერ შენახული პარამეტრები',
                    en: 'In cancelled reports of the old version - Settings saved by you',
                    ru: 'В отмененных отчетах старой версии - Настройки, которые вы сохранили'
                },


                reportTryingExecuteCorrect: {
                    ka: '<small style="color: #424242">იქმნება ანგარიშგება...<br/>შექმნის <strong>დასრულებისთანავე ის გაიხსნება...</strong><br/><strong style="color: #e65100">გთხოვთ არ დახუროთ...</strong></small>',
                    en: '<small style="color: #424242">Reporting is created....<br/>As soon as the creation is completed, <strong>it will open...</strong><br/><strong style="color: #e65100">Please do not close...</strong></small>',
                    ru: '<small style="color: #424242">Отчет создается...<br/>Как только создание будет завершено, <strong>оно откроется...</strong><br/><strong style="color: #e65100">Пожалуйста, не закрывайте...</strong></small>'
                },

                selectReportViews: {
                    ka: 'აირჩიეთ ანგარიშგებების ხედი',
                    en: 'Select reports views',
                    ru: 'Выбрать виды отчетов'
                },

                openReport: {
                    ka: 'გახსენით ანგარიშგება',
                    en: 'Open report',
                    ru: 'Открыть отчет'
                },

                executedReport: {
                    ka: 'შესრულებული ანგარიშგებები',
                    en: 'Executed Reports',
                    ru: 'Выполненные отчеты'
                },

                parameterValueIsNotCorrect: {
                    ka: '{0}\nპარამეტრის მნიშვნელობა\n{1}\nარასწორადაა მითითებული',
                    en: '{1}\nThe value of the parameter\n{0}\nis incorrect',
                    ru: '{1}\nЗначение параметра\n{0}\nневерное'
                },

                parameterNotFound: {
                    ka: '{0}\nპარამეტრი არ მოიძებნა',
                    en: '{1}\nThe value of the parameter',
                    ru: '{1}\nParameter not found'
                },

                exceededTriggersQuotasLimitTryLater: {
                    ka: 'ერთდროულად გაშვებულია ანგარიშგებების მაქსიმალური რაოდენობა\nგთხოვთ ცადოთ მოგვიანებით',
                    en: 'Launched simultaneously maximum number of reports\nPlease try again later',
                    ru: 'Запущено одновременно максимальное количество отчетов\nПовторите попытку позже.'
                },

                withoutParameters: {
                    ka: 'პარამეტრების გარეშე',
                    en: 'Without parameters',
                    ru: 'Без параметров'
                },

                savedParameters: {
                    ka: 'შენახული პარამეტრები',
                    en: 'Saved parameters',
                    ru: 'Сохраненные параметры'
                },

                url_accounts_gss_ge: {
                    ka: 'ბმული accounts.gss.ge',
                    en: 'Url accounts.gss.ge',
                    ru: 'Ссылка accounts.gss.ge'
                },

                url_superfin_gss_ge: {
                    ka: 'ბმული superfin.gss.ge',
                    en: 'Url superfin.gss.ge',
                    ru: 'Ссылка superfin.gss.ge'
                },

                connection_code: {
                    ka: 'კავშირის კოდი',
                    en: 'Connection code',
                    ru: 'Код подключения'
                },

                organization_id: {
                    ka: 'ორგანიზაციის ID',
                    en: 'Organization ID',
                    ru: 'ID Организации'
                },

                organization_name: {
                    ka: 'ორგანიზაციის სახელი',
                    en: 'Organization Name',
                    ru: 'Название Организации'
                },

                organization_currency: {
                    ka: 'ორგანიზაციის ვალუტა',
                    en: 'Organization Currency',
                    ru: 'Валюта Организации'
                },

                organization_timeZone: {
                    ka: 'ორგანიზაციის დროის სარტყელი ბალანსისთვის',
                    en: 'Organization time zone for balance',
                    ru: 'Часовой пояс для баланса Организации'
                },

                superfin_connected: {
                    ka: 'სუპერფინი დაკავშირებულია',
                    en: 'SuperFin is Connected',
                    ru: 'Суперфин Соединенный'
                },

                current_year: {
                    ka: 'მიმდინარე წელი',
                    en: 'Current year',
                    ru: 'Текущий год'
                },
                current_month: {
                    ka: 'მიმდინარე თვე',
                    en: 'Current month',
                    ru: 'Текущий месяц'
                },
                current_day: {
                    ka: 'მიმდინარე დღე',
                    en: 'Current day',
                    ru: 'Текущий день'
                },

                current_year_for_balance: {
                    ka: 'მიმდინარე წელი ბალანსისთვის',
                    en: 'Current year for balance',
                    ru: 'Текущий год для баланса'
                },
                current_month_for_balance: {
                    ka: 'მიმდინარე თვე ბალანსისთვის',
                    en: 'Current month for balance',
                    ru: 'Текущий месяц для баланса'
                },
                current_day_for_balance: {
                    ka: 'მიმდინარე დღე ბალანსისთვის',
                    en: 'Current day for balance',
                    ru: 'Текущий день для баланса'
                },

                // გაფართოებული ძებნა

                AdvancedSearch: {
                    ka: 'გაფართოებული ძებნა',
                    en: 'Advanced search',
                    ru: 'Расширенный поиск'
                },
                everywhereWords: {
                    ka: 'სიტყვები ყველგან',
                    en: 'Words everywhere',
                    ru: 'Слова везде'
                },
                everywhereNumbers: {
                    ka: 'რიცხვები ყველგან',
                    en: 'Numbers everywhere',
                    ru: 'Цифры везде'
                },
                RestoreSearchCondition: {
                    ka: 'ძებნის პირობების აღდგენა',
                    en: 'Restore searching conditions',
                    ru: 'Восстановить условия поиска'
                },
                ClearCondition: {
                    ka: 'პირობების გასუფთავება',
                    en: 'Clear conditions',
                    ru: 'Очистить условия'
                },

                // web-page
                startWorking: {
                    ka: 'დაიწყე მუშაობა',
                    en: 'Start working',
                    ru: 'Начинай работать'
                },
                section_6_title: {
                    ka: `უფასოდ გამოიყენე ვებ-სუპერფინი`,
                    en: `Use Web-Superfin for free`,
                    ru: `Используйте Веб-Суперфин бесплатно`
                },
                support_1_title: {
                    ka: 'მომხმარებლების მხარდაჭერისათვის შეთავაზებული მომსახურებები',
                    en: 'Services offered for customer support',
                    ru: 'Услуги, предлагаемые для поддержки клиентов'
                },
                Free: {
                    ka: `უფასო`,
                    en: `Free`,
                    ru: `Бесплатный`
                },
                Advanced: {
                    ka: `გაფართოვებული`,
                    en: `Advanced`,
                    ru: `Расширенный`
                },
                and: {
                    ka: 'და',
                    en: `and`,
                    ru: `и`
                },
                ForData: {
                    ka: 'მონაცემებისთვის',
                    en: `For data`,
                    ru: `Для данных`
                },
                ForAttachedFiles: {
                    ka: 'მიმაგრებული ფაილებისთვის',
                    en: `For attached files`,
                    ru: `Для прикрепленных файлов`
                },
                PlaceToStoreData: {
                    ka: `<b>ყოველი</b> ორგანიზაციის მონაცემების შესანახად გამოყოფილი ადგილი`,
                    en: `An allocated space <b>for each</b> Organization’s data storage`,
                    ru: `Выделенное место для хранения данных <b>каждого</b> Организации`
                },
                AdditionalInMonth: {
                    ka: `თვეში ყოველი დამატებითი`,
                    en: `Each additional in a month`,
                    ru: `Каждый дополнительный в месяц`
                },
                Unlimited: {
                    ka: `შეუზღუდავი`,
                    en: `Unlimited`,
                    ru: `Неограниченное`
                },
                readMore_0: {
                    ka: `<b>ვებ-სუპერფინის</b> ორგანიზაციაში ერთი (ან თუნდაც რამოდენიმე) მომხმარებლის არსებობის და/ან <b>სუპერფინთან დაკავშირების</b> შემთხვევაში:`,
                    en: `In case of having one (or even several) users in the <b>Web-Organization</b> and/or <b>connecting it with Superfin</b>:`,
                    ru: `В случае наличия одного (или даже нескольких) пользователей в <b>Веб-Организации</b> и/или <b>подключения ее к Суперфин</b>:`
                },
                readMore_1: {
                    ka: `ვებ-სუპერფინში <b>შეძლებთ:</b>`,
                    en: `In Web-Superfin <b>you can</b>`,
                    ru: `В Веб-Суперфин <b>вы сможете</b>`
                },
                readMore_1_1: {
                    ka: `<b>გახადოთ</b> პროგრამა სუპერფინი <b>ნებისმიერი ადგილიდან ხელმისაწვდომი</b>;`,
                    en: `<b>Make the program</b> Superfin <b>available from anywhere</b>;`,
                    ru: `<b>Сделать программу</b> Суперфин <b>доступной откуда угодно</b>;`
                },
                readMore_1_2: {
                    ka: `<b>გაზარდოთ</b> პროგრამა სუპერფინის <b>შესაძლებლობები</b>, კერძოდ:`,
                    en: `<b>Increase the abilities</b> of the program Superfin, namely;`,
                    ru: `<b>Увеличьте способности</b> программы Superfin, а именно;`
                },
                readMore_1_3_1: {
                    ka: `ნახოთ პროგრამაში შემთხვევით წაშლილი და/ან შეცვლილი საბუთები;`,
                    en: `View accidentally deleted and/or changed documents in the program;`,
                    ru: `Просмотр случайно удаленных и/или измененных документов в программе;`
                },
                readMore_1_3_2: {
                    ka: `სწრაფად გადაიტანოთ ექსელში საბუთები, ბრუნვა, ამონაწერი და ა.შ.;`,
                    en: `Quickly transfer documents, turnover, statement, etc. to Excel;`,
                    ru: `Быстро переносить документы, оборот, выписку и т.п. в Excel;`
                },
                readMore_1_3_3: {
                    ka: `მარტივად მოძებნოთ სხვადასხვა ბრუნვა, ნაშთები თუ საბუთები პროგრამაში არსებულ ზღვა ინფორმაციაში;`,
                    en: `Easily search for various turnovers, balances or documents in loads of information available in the program;`,
                    ru: `Удобный поиск различных оборотов, остатков или документов в большом количестве информации, доступной в программе;`
                },
                readMore_1_3_4: {
                    ka: `ფაილებად მიამაგროთ სკანირებული პირველადი დოკუმენტები საბუთებს და ანგარიშებს;`,
                    en: `Attach scanned primary documents as files to documents and reports;`,
                    ru: `Прикреплять отсканированные первичные документы в виде файлов к документам и отчетам;`
                },
                readMore_1_3_5: {
                    ka: `გამოიწეროთ სასურველი ინფორმაცია;`,
                    en: `Subscribe to desired information;`,
                    ru: `Подпишитесь на нужную информацию;`
                },
                readMore_1_3_6: {
                    ka: `მიიღოთ სხვადასხვა ფინანსური ანგარიშგებები;`,
                    en: `Receive various financial statements;`,
                    ru: `Получать различные финансовые отчеты;`
                },
                readMore_1_3_7: {
                    ka: `მოდელების დახმარებით სხვადასხვა (საბუღალტრო აღრიცხვის და ასევე სხვა საქმიანობის) პროგრამებიდან ფინანსური ინფორმაციის, როგორც ერთჯერადი ასევე მრავალჯერადი ავტომატური იმპორტი;`,
                    en: `Однократный и многократный автоматический импорт финансовой информации из различных (бухгалтерских и др. типов) программ с помощью моделей;`,
                    ru: `Single and multiple automatic import of financial information from various (accounting and other type) programs with the help of models;`
                },
                readMore_1_3_8: {
                    ka: `და მრავალი სხვა.`,
                    en: `And many others.`,
                    ru: `И многие другие.`
                },
                readMore_2: {
                    ka: `ვებ-სუპერფინში <b>ვერ შეძლებთ</b>:`,
                    en: `In Web-Superfin <b>you can’t</b>:`,
                    ru: `В Веб-Суперфин <b>вы не сможете:</b>`
                },
                readMore_2_1: {
                    ka: `საბუთების <b>დამატებას</b>, <b>რედაქტირებას</b>, <b>წაშლას</b> და <b>ერთიანად წაშლას</b>;`,
                    en: `<b>Adding</b>, <b>editing</b>, <b>deleting</b> and <b>deleting documents collectively</b>;`,
                    ru: `<b>Добавление</b>, <b>редактирование, </b>удаление<b> и <b>удаление документов едино</b>;`
                },

                // მოდელები
                modelsImport: {
                    ka: `მოდელების იმპორტი`,
                    en: `Models import`,
                    ru: `Импорт моделей`
                },
                superfinModels: {
                    ka: `სუპერფინის მოდელები`,
                    en: `Superfin Models`,
                    ru: `Суперфин Модели`
                },
                superfinModelsDescription: {
                    ka: `<b>მოდელების იმპორტი - Google Drive Excel</b>-ში - საშუალებას გაძლევთ სხვა პროგრამებში არსებული ინფორმაცია პირდაპირ დააიმპორტიროთ სუპერფინში`,
                    en: `<b>Models import - In Google Drive Excel</b> - Allows you to import the existing information from other programs into Superfin`,
                    ru: `<b>Импорт моделей - В Google Drive Excel</b> - Позволяет импортировать существующую информацию из других программ в Суперфин`
                },
                superfinModelsHowToUse_1: {
                    ka: `დააკოპირეთ 'მოდელი'`,
                    en: `Copy the ‘model’`,
                    ru: `Скопируйте ‘модель’`
                },
                superfinModelsHowToUse_2: {
                    ka: `დააკავშირეთ ორგანიზაციას`,
                    en: `Connect with the organization`,
                    ru: `Соедините с Организацией`
                },
                superfinModelsHowToUse_3: {
                    ka: `შეასრულეთ იმპორტი`,
                    en: `Accomplish the import`,
                    ru: `Выполняете импорт`
                },
                superfinModelsLink: {
                    ka: '\'სუპერფინის მოდელები\' - Google Drive Excel-ში',
                    en: '\'Superfin Models\' - Google Drive Excel',
                    ru: '\'Суперфин Модели\' Google Drive Excel'
                },
                superfinModelsAdditionalCapabilities_1: {
                    ka: `<b>ნებისმიერი</b> ახალი <b>მოდელის აწყობა</b> და ავტომატური იმპორტი`,
                    en: '<b>Building</b> and automatic import of <b>any</b> new <b>model</b>',
                    ru: '<b>Построение</b> и автоматический импорт <b>любого</b> нового <b>моделя</b>'
                },
                DuplicateDefaultModel: {
                    ka: `მოდელის ჩემი ვერსიის დამატება`,
                    en: 'Adding my version of the Model',
                    ru: 'Добавление мою версию Модели'
                },
                modelsFolder: {
                    ka: `დასაიმპორტირებელი მოდელების საქაღალდე`,
                    en: `Folder of models to be imported`,
                    ru: `Папка импортируемых моделей`
                },
                modelFileSuffix: {
                    ka: `დასაიმპორტირებელი მონაცემები`,
                    en: `data to be imported`,
                    ru: `данные для импорта`
                },
                AddModelFile: {
                    ka: `იმპორტის ფაილის დამატება`,
                    en: `Adding import file`,
                    ru: `Добавление файла импорта`
                },
                ImportableFiles: {
                    ka: `დასაიმპორტირებელი ფაილები`,
                    en: `Importable files`,
                    ru: `Импортируемые файлы`
                },
                ImportParameters: {
                    ka: `იმპორტის პარამეტრები`,
                    en: `Import parameters`,
                    ru: `Параметры импорта`
                },
                ExecuteModelImport: {
                    ka: 'იმპორტის შესრულება',
                    en: 'Import Execution',
                    ru: 'Выполнение Импорта'
                },
                MyVersion: {
                    ka: `ჩემი ვერსია`,
                    en: `My version`,
                    ru: `Моя версия`
                },
                modelsFolderGMails: {
                    ka: 'საქაღალდის მოხმარებისთვის გუგლის ელ. ფოსტ(ებ)ი',
                    en: 'Google Email address\' of folder users',
                    ru: 'Эл. адрес(а) Google  пользователей папки'
                },
                createShareImportFolder: {
                    ka: `დასაიმპორტირებელი მოდელების საქაღალდის შექმნა/გაზიარება`,
                    en: `Creating/Sharing folder of models to be imported`,
                    ru: `Создание/Совместное использование папки импортируемых моделей`
                },
                shareImportFolder: {
                    ka: `დასაიმპორტირებელი მოდელების საქაღალდის გაზიარება`,
                    en: `Sharing folder of models to be imported`,
                    ru: `Совместное использование папки импортируемых моделей`
                },
                autoImport: {
                    ka: `ავტომატური იმპორტი`,
                    en: `Automatic import`,
                    ru: `Автоматический импорт`
                },
                autoImportModelDescription: {
                    ka: `ყოველდღიურად UTC შუაღამის საათებში შემოწმდება მოდელების საქაღალდეები და დაიმპორტირდება ატვითული მოდელები. შედეგის მეილები დაეგზავნებათ მითითებულ ელ-ფოსტის მომხმარებლებს`,
                    en: `Models folders will be checked daily at midnight UTC and uploaded models will be imported. Result Emails will be sent to the specified Email users`,
                    ru: `Папки с моделями будет проверено ежедневно в полночь по всемирному координированному времени, и загруженные модели будут импортированы. Электронные письма с результатами будут отправлены указанным пользователям Эл. адреса`
                },
                CanNotAddDefaultVersionModel: {
                    ka: `მოდელს პარამეტრები არ გააჩნია.\nმისი დეფოლტ ვერსია უკვე გაქვთ დამატებულია`,
                    en: `Model has no parameters. \nIts default version has already been added`,
                    ru: `Модель не имеет параметров. \nЕго версия по умолчанию уже добавлена`
                },
                modelCreating: {
                    ka: '<small style="color: #424242">იქმნება დასაიმპორტირებელი მონაცემების ფაილი...<br/>შექმნის <strong>დასრულებისთანავე ის გაიხსნება...</strong><br/><strong style="color: #e65100">გთხოვთ არ დახუროთ...</strong></small>',
                    en: '<small style="color: #424242">....<br/>As soon as the creation is completed, <strong>it will open...</strong><br/><strong style="color: #e65100">Please do not close...</strong></small>',
                    ru: '<small style="color: #424242">...<br/>Как только создание будет завершено, <strong>оно откроется...</strong><br/><strong style="color: #e65100">Пожалуйста, не закрывайте...</strong></small>'
                },
                openFolder: {
                    ka: 'გთხოვთ გახსნათ საქაღალდე',
                    en: 'Please open the folder',
                    ru: 'Пожалуйста, откройте папку'
                },
                uploadModelData: {
                    ka: 'ამ საქაღალდეში ატვირთეთ დასაიმპორტირებელი ექსელის ფაილ(ებ)ი',
                    en: 'Upload Excel file\'s to be imported in this folder',
                    ru: 'Загрузите в эту папку Excel файл(ы) для импорта'
                },
                doRefresh: {
                    ka: 'ატვითული ფაილ(ებ)ის აქ გამოჩენისთვის მონიშნეთ განახლება',
                    en: 'For displaying uploaded file\'s select refresh',
                    ru: 'Для появление загруженных файл(ов) выберите обновление'
                },

                modelImportStarted: {
                    ka: 'მოდელის მონაცემების იმპორტირება დაიწყო\nინფორმაციას მიიღებთ მოგვიანებით, იმპორტირების საქაღალდის მოხმარებისთვის გუგლის ელ. ფოსტ(ებ)ის მისამართ(ებ)ზე',
                    en: 'Model\'s data import has started\ninformation will be sent later, to Google email address\' for using the import folder',
                    ru: 'Импорт данных модели начался\nинформация будет отправлена позже, на Google эл. адрес(ах) для использования папки импорта'
                },

                modelImportAlreadyStarted: {
                    ka: 'მოდელის მონაცემების იმპორტირება დაწყებულია უკვე',
                    en: 'Model\'s data import has already started',
                    ru: 'Импорт данных модели уже начался'
                },

                modelAccountNumberImportError: {
                    ka: '{0} - ანგარიშის შეცდომა',
                    en: '{0} - account error',
                    ru: '{0} - ошибка аккаунта счета'
                },

                modelAccountNotDefinedImportError: {
                    ka: 'შეცდომა - მიზეზის დასადგენად ანგარიშის და/ან მისი ნაშთის დამატება ცადეთ პროგრამაში (დამატების ‘+’ ღილაკით)',
                    en: 'Error - Try adding an account and/or its balance to the program to find out the reason (add ‘+’ button)',
                    ru: 'Ошибка - Чтобы узнать причину, попробуйте добавить учетную запись и/или его остаток в программу (добавьте с помощью ‘+’ кнопки)'
                },

                modelTooManyDataImportError: {
                    ka: 'იმპოტირების პროცესი შეწყდა დასაიმპორტებელი ჩანაწერების რაოდენობა აჭარბებს {0}',
                    en: 'The import process has stopped, the number of records to be imported exceeds {0}',
                    ru: 'Процесс импорта остановлен, количество импортируемых записей превышает {0}'
                },

                modelImportNeedProjectError: {
                    ka: 'საწყისი ნაშთების იმპორტირებისათვის აუცილებელია გქონდეთ პროექტი',
                    en: 'For importing opening balances a project is necessary',
                    ru: 'Для импорта начальных остатков обязательно иметь проект'
                },

                modelImportMailSubject: {
                    ka: `ფაილის იმპორტირება დასრულდა`,
                    en: `File import completed`,
                    ru: `Импорт файла завершен`
                },

                modelImportErrorMailSubject: {
                    ka: `ფაილის იმპორტირების შეცდომა`,
                    en: `File import error`,
                    ru: `Ошибка импорта файла`
                },

                modelImportCurrencyError: {
                    ka: `ვალუტა არასწორადაა მითითებული`,
                    en: `Currency is specified incorrectly`,
                    ru: `Валюта указана неверно`
                },

                modelImportAccountHaveSubAccountsError: {
                    ka: `{0} - ანგარიშს გააჩნია ქვეანგარიშები`,
                    en: `{0} - the account has sub-accounts`,
                    ru: `{0} - в счете есть субсчета`
                },

                // მიმაგრებები
                FilesStorage: {
                    ka: `ფაილების საცავი`,
                    en: `Files storage`,
                    ru: `Хранилище файлов`
                },
                AttachFile: {
                    ka: `ფაილის მიმაგრება`,
                    en: `Attach file`,
                    ru: `Прикрепить файл`
                },
                AttachingFiles: {
                    ka: 'ფაილების მიმაგრება',
                    en: 'Attaching files',
                    ru: 'Прикрепление файлов'
                },
                AttachedFiles: {
                    ka: `მიმაგრებული ფაილები`,
                    en: `Attached files`,
                    ru: `Прикрепленные файлы`
                },
                fileSizeError: {
                    ka: `{0}\nფაილის ზომა აჭარბებს მაქსიმალურ ზომას - {1}`,
                    en: `{0}\nFile size exceeds maximum size - {1}`,
                    ru: `Размер файла\n{0}\nпревышает максимальный размер - {1}`
                },
                fileSizeNotEnoughError: {
                    ka: 'არასაკმარისი მეხსიერების გამო შეუძლებელია ფაილის მიმაგრება.\nსაჭიროა - დამატებითი მეხსიერების შეძენა',
                    en: 'Due to the lack of storage it is not possible to attach files.\nIt is necessary to purchase additional storage',
                    ru: 'Из-за нехватки памяти невозможно прикрепить файлы.\nНеобходимо приобрести дополнительной памяти'
                },

                // organizations
                linkedSuperfinGSSUserInfoTitle: {
                    ka: `ID - ორგანიზაცია / სუპერფინის სარეგისტრაციო ნომერი / მომხმარებლები`,
                    en: `ID - Organization / Registration number of SuperFin / Users`,
                    ru: `ID - Организация / Регистрационный номер Суперфина / Пользователи`
                },

                // billing
                billing: {
                    ka: `ბილინგი`,
                    en: `billing`,
                    ru: `биллинг`
                },
                Billing: {
                    ka: `ბილინგი`,
                    en: `Billing`,
                    ru: `Биллинг`
                },
                BillingAccounts: {
                    ka: `გადახდის ანგარიშები`,
                    en: `Billing accounts`,
                    ru: `Платежные счета`
                },
                BillingAccount: {
                    ka: `გადახდის ანგარიში`,
                    en: `Billing account`,
                    ru: `Платежный счет`
                },
                OwnerName: {
                    ka: `მფლობელის სახელი`,
                    en: `Owner Name`,
                    ru: `Имя владельца`
                },
                IDNumber: {
                    ka: `ID ნომერი`,
                    en: `ID Number`,
                    ru: `ID номер`
                },
                IdentificationPersonalNumber: {
                    ka: `საიდენტიფიკაციო / პირადი ნომერი`,
                    en: `Identification / Personal  Number`,
                    ru: `Идентификационный / Персональный  номер`
                },
                Storage: {
                    ka: `მეხსიერება`,
                    en: `Storage`,
                    ru: `Память`
                },
                DataStorage: {
                    ka: `მონაცემების მეხსიერება`,
                    en: `Data Storage`,
                    ru: `Памяти данных`
                },
                EMailNewUser: {
                    ka: `ელ-ფოსტა - ახალი მომხმარებლის`,
                    en: `EMail - of new User`,
                    ru: `Эл. адрес - нового Пользователя`
                },
                EMailNewManager: {
                    ka: `ელ-ფოსტა - ახალი მენეჯერის`,
                    en: `EMail - of new Manager`,
                    ru: `Эл. адрес - нового Менеджера`
                },
                Transactions: {
                    ka: `ტრანზაქციები`,
                    en: `Transactions`,
                    ru: `Трансакции`
                },
                ChooseAccount: {
                    ka: `ანგარიშის არჩევა - Ctrl+Space`,
                    en: `Choose Account - Ctrl+Space`,
                    ru: `Выберите Счёт - Ctrl+Space`
                },
                TransactionsDebitCreditMoneyCurrencyMoneyInMainCurrency: {
                    ka: `ტრანზაქციები - დებეტი/კრედიტი/თანხა/საკურსო რაოდენობა/კურსი/თანხა ძირითად ვალუტაში`,
                    en: `Transactions - Debit/Credit/Amount/Course point/Rate/Amount in the main currency`,
                    ru: `Транзакции - Дебет/Кредит/Сумма/Количество курса/Курс/Сумма в основной валюте`
                },
                AllAmount: {
                    ka: 'სულ რაოდენობა',
                    en: 'Total amount',
                    ru: 'Общее количество'
                },
                AllPurchasedAmount: {
                    ka: 'სულ შეძენილი რაოდენობა',
                    en: 'Total purchased amount will be',
                    ru: 'Общее приобретенное количество будет'
                },
                AllPurchasedAmountBecome: {
                    ka: 'სულ შეძენილი რაოდენობა გახდება',
                    en: 'Total purchased amount',
                    ru: 'Общее приобретенное количество'
                },
                selectStock: {
                    ka: 'საწყობის არჩევა',
                    en: 'Select warehouse',
                    ru: 'Выберите склад'
                },
                BuyAdditionalStorage: {
                    ka: 'დამატებითი მეხსიერების შეძენა',
                    en: 'Purchase of additional storage',
                    ru: 'Приобретение дополнительной памяти'
                },
                StorageDistributionToOrganizations: {
                    ka: 'მონაცემების მეხსიერების ორგანიზაციებზე განაწილება',
                    en: 'Allocating of data storage to the organizations',
                    ru: 'Распределение памяти данных по организациям,'
                },
                organizationOverviewSuperfinIsFree: {
                    ka: 'superfin.gss.ge - ერთი მომხარებლისთვის ყველაფერი უფასოა. იხ: ბიზნეს დამწყები',
                    en: 'superfin.gss.ge - For a single user everything is FREE. See: Business Starter',
                    ru: 'superfin.gss.ge -Для одного пользователя все БЕСПЛАТНО. См: Бизнес-Стартер'
                },
                organizationStorageSubject: {
                    ka: 'შეძენილი მეხსიერებიდან ამ ორგანიზაციისთვის გამოყოფილი რაოდენობა',
                    en: 'The amount of purchased memory allocated for this organization',
                    ru: 'С приобретенной памяти выделенная сумма для этой организации'
                },
                billingAccountStorageSubject: {
                    ka: 'ვებ-ორგანიზაცი(ებ)ის მონაცემების შესანახად შეძენილია მეხსიერება',
                    en: 'Storage is purchased for saving Web-Organization(s)\' data',
                    ru: 'Для сохранения данных Веб-Организации приобретена память'
                },
                billingAccountFilesStorageSubject: {
                    ka: 'მიმაგრებული ფაილებისათვის დამატებით გამოიყო 10-ჯერ მეტი',
                    en: '10 times more was additionally allocated for attached files',
                    ru: 'В 10 раз больше было дополнительно выделено для прикрепленных файлов'
                },
                billingAccountOrganisationFilesStorageSubject: {
                    ka: 'ორგანიზაციებში მიმაგრებული ფაილებისათვის დამატებით გამოიყო 10-ჯერ მეტი მეხსიერება',
                    en: '10 times more storage has been additionally allocated for files attached to organizations',
                    ru: 'В 10 раз больше памяти было дополнительно выделено для файлов, прикрепленных к организациям'
                },
                billingAccountStorageError01: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაციებისათვის განაწილებული მეხსიერების ვადა ამოიწურა',
                    en: 'The storage allocated to web-organizations through a billing account has expired',
                    ru: 'Память, выделенная для Веб-Организаций через платежный счет более чем приобретена'
                },
                billingAccountStorageError02: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაციებისათვის განაწილებული მეხსიერება აღემატება შეძენილს',
                    en: 'The storage allocated to Web-Organizations through a billing account is more than purchased',
                    ru: 'Память, выделенная для Веб-Организаций через платежный счет более чем приобретена'
                },
                billingAccountSuperfinSubject01: {
                    ka: 'ვებ-ორგანიზაცი(ებ)ის ბუღალტერიის აღსარიცხად შეძენილი მომხმარებლების რაოდენობა',
                    en: 'The number of users purchased for accounting of the Web-Organization(s)\'',
                    ru: 'Количество пользователей приобретено для учета бухгалтерии Веб-Организации'
                },
                billingAccountSuperfinError01: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაცი(ებ)ის ბუღალტერიის აღსარიცხად შეძენილი მომხმარებლების ვადა ამოიწურა',
                    en: 'The storage allocated to Web-Organizations through a billing account has expired',
                    ru: 'Память, выделенная для Веб-Организаций через платежный счет просрочена'
                },
                billingAccountSuperfinError02: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაცი(ებ)ის ბუღალტერიის აღსარიცხად განაწილებული მომხმარებლების რაოდენობა აღემატება შეძენილს',
                    en: 'The number of users allocated to accounting of the Web-Organization(s)\' through a billing account is more than purchased',
                    ru: 'Количество пользователей, выделенная для учета бухгалтерии Веб-Организации(й) через платежный счет более чем приобретена'
                },
                BuyAdditionalSuperfin: {
                    ka: 'დამატებითი მომხმარებლ(ებ)ის შეძენა',
                    en: 'Purchase of additional user(s)',
                    ru: 'Приобретение дополнительных пользователей'
                },
                ContinueServiceTerm: {
                    ka: 'მომსახურების ვადის გაგრძელება',
                    en: 'Extend service expiration date',
                    ru: 'Продление срока сервиса'
                },
                ExpirationDate: {
                    ka: 'ვადა',
                    en: 'Expiration date',
                    ru: 'Срок'
                },
                NewExpirationDate: {
                    ka: 'ახალი ვადა',
                    en: 'New expiration date',
                    ru: 'Новый срок'
                },
                ContinueTermByYear: {
                    ka: 'ვადა გაგრძელდეს (წელი)',
                    en: 'Extend expiration date (year)‘',
                    ru: 'Продлить срок (год)'
                },
                Accrual: {
                    ka: 'დარიცხვა',
                    en: 'Accrual',
                    ru: 'Начисление'
                },
                ServicePaymentDate: {
                    ka: 'თარიღი - მომსახურების დაწყების / გადახდის ',
                    en: 'Date - Service start / Payment',
                    ru: 'Дата - Начало услуги / Платежа'
                },
                PurchasePaymentDate: {
                    ka: 'თარიღი - შეძენის / გადახდის ',
                    en: 'Date - Purchase / Payment',
                    ru: 'Дата - Начало услуги / Платежа'
                },
                PayableMoney: {
                    ka: 'გადასახდელი თანხა',
                    en: 'Payable amount',
                    ru: 'Сумма платежа'
                },
                ComeBack: {
                    ka: 'დასაბრუნებელი',
                    en: 'For return’',
                    ru: 'Для возврата'
                },
                _amount: {
                    ka: 'თანხა',
                    en: 'Amount',
                    ru: 'Сумма'
                },
                AccrualTransactions: {
                    ka: 'დარიცხვის ტრანზაქციები',
                    en: 'Accrual transactions’',
                    ru: 'Начисление транзакции'
                },
                BalanceBeforeOperation: {
                    ka: 'ოპერაციამდე ბალანსი',
                    en: 'Balance before operation’',
                    ru: 'Баланс перед операцией'
                },
                BalanceAfterOperation: {
                    ka: 'ოპერაციის შემდეგ ბალანსი',
                    en: 'Balance after operation’',
                    ru: 'Баланс после операции'
                },
                WillPayByGel: {
                    ka: 'გადავიხდი ქართული ლარით',
                    en: 'I will pay with Georgian GEL',
                    ru: 'Я заплачу грузинским лари'
                },
                Purchase: {
                    ka: 'შეძენა',
                    en: 'Purchase',
                    ru: 'Покупка'
                },
                Payment: {
                    ka: 'გადახდა',
                    en: 'Payment',
                    ru: 'Платеж'
                },
                Cost: {
                    ka: 'ღირებულება',
                    en: 'Cost',
                    ru: 'Стоимость'
                },
                Balance: {
                    ka: 'ბალანსი',
                    en: 'Balance',
                    ru: 'Баланс'
                },
                ReturnTo: {
                    ka: 'დაბრუნება',
                    en: 'Return',
                    ru: 'Возврат'
                },
                billingAccountRetailSalesSubject01: {
                    ka: 'ვებ-ორგანიზაცი(ებ)ის საცალო გაყიდვების აღსარიცხად შეძენილია სალაროები',
                    en: 'For accounting Web-Organizations\' retail sales, cash boxes have been purchased',
                    ru: 'Для учета розничных продаж Веб-Организаций, приобретенный кассы'
                },
                billingAccountRetailSalesError01: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაცი(ებ)ზე შეძენილი სალაროების ვადა ამოიწურა',
                    en: 'The cash boxes purchased for the Web-Organization(s)\' through a billing account has expired',
                    ru: 'Кассы, приобретено для  Веб-Организаций через платежный счет просрочена'
                },
                billingAccountRetailSalesError02: {
                    ka: 'გადახდის ანგარიშით ვებ-ორგანიზაცი(ებ)ზე განაწილებული სალაროები აღემატება შეძენილს',
                    en: 'The cash boxes allocated to the Web-Organization(s)\' through a billing account is more than purchased',
                    ru: 'Кассы, выделенные для Веб-Организаций через платежный счет более чем приобретена'
                },
                BuyAdditionalRetailSales: {
                    ka: 'დამატებითი სალაროების შეძენა',
                    en: 'Purchase of additional cash boxes',
                    ru: 'Приобретение дополнительных касс'
                },
                RetailSalesDistributionToOrganizations: {
                    ka: 'სალაროების ორგანიზაციებზე განაწილება',
                    en: 'Allocating of cash boxes to the organizations',
                    ru: 'Распределение касс по организациям'
                },
                SuperfinUsersDistributionToOrganizations: {
                    ka: 'მომხმარებლ(ებ)ის ორგანიზაციებზე განაწილება',
                    en: 'Allocating of users\' to the organizations',
                    ru: 'Распределение пользователей по организациям'
                },
                endingBalance: {
                    ka: 'საბოლოო ბალანსი',
                    en: 'Ending balance',
                    ru: 'Конечный баланс'
                },
                PurchasePayment: {
                    ka: 'შეძენა / გადახდა',
                    en: 'Purchase / Payment',
                    ru: 'Приобретение / Платежа'
                },
                AccountingTransactions: {
                    ka: 'ბუღალტრული ტრანზაქციები',
                    en: 'Accounting transactions',
                    ru: 'Бухгалтерские транзакции'
                },
                amountPaid: {
                    ka: 'გადახდილია თანხა',
                    en: 'The amount paid',
                    ru: 'Сумма уплачено'
                },
                subjectOfBuyStorage: {
                    ka: 'შეძენილია მეხსიერება {0} GB - ჯამში {1} GB, ვადით: {2}',
                    en: 'Purchased storage {0} GB - in total {1} GB, for period: {2}',
                    ru: 'Приобретено память {0} GB - в сумме {1} GB, за период: {2}'
                },
                subjectOfContinueTermOfStorage: {
                    ka: 'გაგრძელდა ვადა {0} GB მეხსიერებაზე - {1} წლით, ვადით: {2}',
                    en: 'Term continued on {0} GB storage – by {1} year(s), for a period: {2}',
                    ru: 'Срок продолжился на {0} GB памяць – на {1} год(а), за период: {2}'
                },
                subjectOfReducedStorage: {
                    ka: 'შემცირებულია {0} GB მეხსიერება - დარჩა {1} GB, ვადით: {2}',
                    en: 'Reduced {0} GB storage - remained {1} GB for a period: {2}',
                    ru: 'Уменьшено {0} GB память - осталось {1GB за период: {2}'
                },
                subjectOfBuyRetailSale: {
                    ka: 'შეძენილია საცალო ვაჭრობის {0} სალარო - ჯამში {1} სალარო, ვადით: {2}',
                    en: 'Purchased retail sale’s {0} cash box(es) – in total  {1} cash box(es), for a period: {2}',
                    ru: 'Приобретена {0} касс(ы)а розничных продаж - в сумме {1} касс(ы)а, за период: {2}'
                },
                subjectOfContinueTermOfRetailSale: {
                    ka: 'გაგრძელდა ვადა საცალო ვაჭრობის {0} სალაროზე - {1} წლით, ვადით: {2}',
                    en: 'Term continued on {0} retail sale’s {0} cash box(es) – by {1} year(s), for a period: {2}',
                    ru: 'Срок продолжился на {0} касс(ах)е розничных продаж – на {1} год(а), за период: {2}'
                },
                subjectOfReducedRetailSale: {
                    ka: 'შემცირებულია საცალო ვაჭრობის {0} სალარო - დარჩა {1} სალარო, ვადით: {2}',
                    en: 'Reduced retail sale’s {0} cash box - remained {1} cash box, for a period: {2}',
                    ru: 'Уменьшено касс розничной продажи {0} - осталась {1} касс, за период {2}'
                },
                subjectOfBuySuperfin: {
                    ka: 'შეძენილია სუპერფინის {0} მომხმარებელი - ჯამში {1} მომხმარებელი, ვადით: {2}',
                    en: 'Purchased Superfin’s {0} user(s) - In total {1} user(s), for the period {2}',
                    ru: 'Приобретён {0} пользователь Суперфина - В сумме {1} пользователь, за период {2}'
                },
                subjectOfContinueTermOfSuperfin: {
                    ka: 'გაგრძელდა ვადა სუპერფინის {0} მომხმარებელისთვის - {1} წლით, ვადით: {2}',
                    en: 'Term continued for {0} Superfin ’s users – by {1} year, for a period: {2}',
                    ru: 'Срок продлён для {0} клиентов Суперфина- на {1} год, за период: {2}'
                },
                subjectOfReducedSuperfin: {
                    ka: 'შემცირებულია სუპერფინის {0} მომხმარებელი - დარჩა {1} მომხმარებელი, ვადით: {2}',
                    en: 'Reduced Superfin’s {0} user - remained {1} user, for a period: {2}',
                    ru: 'Уменьшено {0} пользователь Суперфина - остался {1} пользователь, за период: {2}'
                },
                organizationOverviewStorageSubject00: {
                    ka: 'ვებ-ორგანიზაციისთვის მონაცემების შესანახად <b>დეფოლტად</b> გამოყოფილი მეხსიერება - <b>{0}</b> GB',
                    en: 'For Web-Organization data <b>by default</b> allocated memory - <b>{0}</b> GB',
                    ru: 'Для данных Веб-Организации <b>по умолчанию</b> выделенная память - <b>{0}</b> GB'
                },
                organizationOverviewStorageSubject01: {
                    ka: '<b>განახლებების გამო</b> ვებ-ორგანიზაციისთვის <b>დამატებით</b> გამოყოფილი მეხსიერება - <b>{0}</b> GB',
                    en: '<b>Due to the refreshes</b> for Web-Organization <b>additional</b> memory is allocated - <b>{0}</b> GB',
                    ru: '<b>Из-за обновлений</b> для Веб-Организации <b>дополнительная</b> память выделена - <b>{0}</b> GB'
                },
                organizationOverviewStorageSubject02: {
                    ka: 'სულ გამოყოფილია <b>{0} GB</b> და წინა დღის მდგომარეობით გამოყენებულია <b>{1}</b>',
                    en: 'In total allocated <b>{0} GB</b> and as of the previous day used <b>{1}</b>',
                    ru: 'В общем выделено <b>{0} GB</b> и по состоянию предыдущего дня использованно <b>{1}</b>'
                },
                organizationOverviewStorageSubject03: {
                    ka: 'წინა დღის მდგომარეობით საბუთების რაოდენობაა - <b>{0}</b> - წაშლილის და შეცვლილის ჩათვლით <b>{1}</b>',
                    en: 'As of the previous day the number of documents is  - <b>{0}</b> - including deleted and modified documents <b>{1}</b>',
                    ru: 'По состоянию предыдущего дня количество документов есть - <b>{0}</b> - включая удаленные и измененные документы <b>{1}</b>'
                },
                organizationOverviewStorageSubject05: {
                    ka: 'მიმდინარე მდგომარეობით გატარებების რაოდენობა წაშლილის და შეცვლილის ჩათვლით არის - <b>{0}</b>',
                    en: 'Current number of transactions including deleted and modified is - <b>{0}</b>',
                    ru: 'Количество проводок по текущему состоянию включая удаленные и измененные, составляет - <b>{0}</b>'
                },
                organizationOverviewStorageError01: {
                    ka: 'არასაკმარისი რაოდენობის მეხსიერების გამო შეუძლებელია მონაცემების დამატება',
                    en: 'Due to the lack of storage is not possible to add data',
                    ru: 'Из-за нехватки памяти невозможно добавить данные'
                },
                organizationOverviewLinkedSuperfinSubject01: {
                    ka: 'ვებ-ორგანიზაციასთან დაკავშირებულია პროგრამა სუპერფინის {0} მომხმარებლიანი სადემონსტრაციო ვერსია',
                    en: 'Demo version of Superfin for {0} user(s)\ is connected to this Web-Organization',
                    ru: 'Демо-версия Суперфин для {0} пользователь(и) подключена к этой Веб-Организацией"'
                },
                organizationOverviewLinkedSuperfinSubject02: {
                    ka: 'ვებ-ორგანიზაციასთან დაკავშირებულია პროგრამა სუპერფინის {0} მომხმარებლიანი ვერსია\nსარეგისტრაციო ნომერი - {1}; ვადა UTC - {2}',
                    en: '{0} user version of Superfin program is connected to this Web-Organization\nRegistration number - {1}; Term UTC - {2}',
                    ru: '{0} пользовательская версия программы Суперфин подключена к этой Веб-Организации\nРегистрационный номер - {1}; Срок UTC - {2}'
                },
                organizationOverviewLinkedSuperfinError01: {
                    ka: 'დაკავშირებული პროგრამა სუპერფინის მომსახურების ვადა ამოწურულია\nპროგრამის მომსახურების ვადის გასაგრძელებლად გთხოვთ დაგვიკავშირდეთ',
                    en: 'Connected SuperFin Software service has been expired\nPlease, contact us to extend the service of the program',
                    ru: 'Период действия подключенной программы Суперфин истек\nПожалуйста, свяжитесь с нами, чтобы продлить период действия программы'
                },
                organizationOverviewSuperfinSubject00: {
                    ka: 'ვებ-ორგანიზაციისთვის განსაზღვრული მომხმარებლების რაოდენობა',
                    en: 'Defined users allowed in the Web-Organization, amount',
                    ru: 'Определенные пользователи для Веб-Организации, количество'
                },
                organizationOverviewSuperfinSubject01: {
                    ka: 'შეძენილი რაოდენობა',
                    en: 'Purchased amount',
                    ru: 'Приобретенное количество'
                },
                organizationOverviewSuperfinSubject02: {
                    ka: 'პროგრამა სუპერფინთან დაკავშირების გამო დამატებით გამოყოფილი',
                    en: 'Additionally allocated due to connection to Superfin',
                    ru: 'Дополнительно выделено из-за соединение к Суперфин'
                },
                organizationOverviewSuperfinSubject03: {
                    ka: 'დამატებით გამოყოფილი რაოდენობაა',
                    en: 'Additionally allocated amount is',
                    ru: 'Дополнительно выделенная сумма'
                },
                organizationOverviewSuperfinSubject04_1: {
                    ka: 'ვებ-ორგანიზაციის',
                    en: 'From the Web-Organizations',
                    ru: ' '
                },
                organizationOverviewSuperfinSubject04_2: {
                    ka: 'მომხმარებლებიდან',
                    en: 'users',
                    ru: 'От пользователей Веб-Организаций'
                },
                organizationOverviewSuperfinSubject05: {
                    ka: 'სულ შეძენილი და შესაძენი რაოდენობა',
                    en: 'purchased and to be purchased, total amount',
                    ru: 'приобретенный и требующих приобрести, общая количество'
                },
                organizationOverviewSuperfinDocumentsLimit: {
                    ka: 'საბუთების რაოდენობის ლიმიტი',
                    en: 'Limit of number of documents',
                    ru: 'Ограничение количества документов'
                },
                organizationOverviewSuperfinError01: {
                    ka: 'მომსახურება არ არის შეძენილი ვებ-ორგანიზაციის ყველა მომხმარებლისთვის',
                    en: 'The service is not purchased for all users of the Web-Organization',
                    ru: 'Услуга не приобретена для всех пользователей Веб-Организации'
                },
                organizationOverviewSuperfinError02: {
                    ka: 'შეძენილი მომხმარებლების მომსახურების ვადის გასვლის გამო მოგეწოდებათ შეზღუდული სერვისი',
                    en: 'Due to expiration of the purchased users’ service life, you are be given limited service',
                    ru: 'В связи с истечением срока действия приобретенного обслуживания,  предложен ограниченный сервис'
                },
                organizationOverviewSuperfinError03: {
                    ka: 'შექმნილი საბუთების რაოდენობა <b>{0}</b> აჭარბებს გამოყოფილ ლიმიტს - <b>{1}</b> საბუთი',
                    en: 'The number of created documents <b>{0}</b> exceeds allocated limit - <b>{1}</b> document',
                    ru: 'Количество созданных документов <b>{0}</b> - превышает выделенный лимит - <b>{1}</b> документ'
                },
                providingWithLimitedService: {
                    ka: 'ამჟამად მოგეწოდებათ შეზღუდული სერვისი',
                    en: 'You are currently provided with a limited service',
                    ru: 'В настоящее время вам предоставляется ограниченный сервис'
                },
                documentedRestricted: {
                    ka: 'საბუთების <b>დამატება</b>, <b>რედაქტირება</b>, <b>წაშლა</b> და <b>ერთიანად წაშლა</b> შეუძლებელია',
                    en: 'b>Adding</b>, <b>editing</b>, <b>deleting</b> and <b>deleting documents collectively</b> is impossible',
                    ru: '<b>Добавление</b>, <b>редактирование, </b>удаление<b> и <b>удаление документов едино</b> невозможно'
                },
                seeToDetermineTheCause: {
                    ka: 'მიზეზის გასარკვევად იხილეთ',
                    en: 'See to determine the cause',
                    ru: 'См. чтобы определить причину'
                },
                serviceIsNotAvailable: {
                    ka: 'მომსახურება არ არის შეძენილი',
                    en: 'The service is not purchased',
                    ru: 'Сервис не приобретён'
                },
                noNeedPurchaseService: {
                    ka: 'არ საჭიროებს მომსახურების შეძენას',
                    en: 'No service purchase required',
                    ru: 'Покупка услуги не требуется'
                },
                servicePurchased: {
                    ka: 'მომსახურება შეძენილია',
                    en: 'Service is purchased',
                    ru: 'Услуга приобретена'
                },

                // საცალო გაყიდვა
                'retail-sales': {
                    ka: 'საცალო გაყიდვები',
                    en: 'Retail sales',
                    ru: 'Розничные продажи'
                },
                RetailSales: {
                    ka: 'საცალო გაყიდვები',
                    en: 'Retail Sales',
                    ru: 'Розничные продажи'
                },
                CashBoxes: {
                    ka: 'სალაროები',
                    en: 'Cash Boxes',
                    ru: 'Кассы'
                },

                // footer
                footerText: {
                    ka: 'მადლობა, რომ ჩვენთან ერთად აკეთებთ ბიზნესს... თუ გექნებათ შეკითხვები, გთხოვთ არ მოგერიდოთ და დაგვიკავშირდით',
                    en: 'Thanks for doing business with us... If you have any questions, please feel free to contact us',
                    ru: 'Спасибо, что ведете бизнес вместе с нами... Если у вас есть вопросы, пожалуйста, не стесняйтесь и свяжетесь с нами'
                },
                //
                goods: {
                    ka: 'საქონელი',
                    en: 'Goods',
                    ru: 'Товар'
                },
            });

            gssLanguage.registerConstants({
                div: "<div style='word-break: break-all;'>'{0}'</div>",
                strong: "<strong>'{0}'</strong>"
            });

            GSS_Language.registered = true;
        }

        return gssLanguage;
    }
}

export default GSS_Language.gssLanguage();
