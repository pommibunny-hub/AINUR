import React, { useState } from 'react';
import {
  FolderCode,
  Layers,
  Terminal,
  CheckCircle2,
  Copy,
  Check,
  FileCode,
  Globe,
  Code2,
  Package,
  Compass,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  Github,
  GitBranch,
  ShieldCheck,
  Download
} from 'lucide-react';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
}

const PROJECT_IDEAS: ProjectIdea[] = [
  {
    id: 'dashboard',
    title: 'Панель управления и аналитика (CRM / SaaS)',
    description: 'Интерактивные графики, метрики выручки, воронка продаж, управление клиентами и фильтрация.',
    category: 'Бизнес & Аналитика',
    prompt: 'Создай современную панель аналитики продаж (CRM): дашборд с графиками выручки, списком клиентов, статусами заказов и фильтрацией.',
  },
  {
    id: 'ecommerce',
    title: 'Интернет-магазин с корзиной',
    description: 'Каталог товаров с фильтрами по категориям, карточками товаров, корзиной и оформлением заказа.',
    category: 'E-Commerce',
    prompt: 'Создай интернет-магазин с каталогом товаров, карточками, поиском, категориями, корзиной покупок и расчетом стоимости.',
  },
  {
    id: 'task-tracker',
    title: 'Канбан-доска и менеджер задач',
    description: 'Колонки задач (К выполнению, В работе, Готово), теги приоритетов, дедлайны и перетаскивание.',
    category: 'Продуктивность',
    prompt: 'Создай интерактивный трекер задач в стиле Канбан (Trello/Notion) с добавлением задач, дедлайнами, тегами и перемещением между колонками.',
  },
  {
    id: 'portfolio',
    title: 'Портфолио & Презентационный лендинг',
    description: 'Элегантная посадочная страница с кейсами, навыками, интерактивным калькулятором услуг и контактами.',
    category: 'Лендинг',
    prompt: 'Создай стильный премиальный лендинг-портфолио с интерактивными кейсами, секцией навыков, отзывами и формой обратной связи.',
  },
];

export default function App() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [copiedCustom, setCopiedCustom] = useState(false);
  const [githubRepoUrl, setGithubRepoUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'github' | 'status' | 'ideas' | 'structure'>('github');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyCustom = () => {
    if (!customPrompt.trim()) return;
    navigator.clipboard.writeText(customPrompt);
    setCopiedCustom(true);
    setTimeout(() => setCopiedCustom(false), 2000);
  };

  const cleanRepoUrl = githubRepoUrl.trim() || 'https://github.com/ВАШ_ЛОГИН/МОЙ_ПРОЕКТ.git';
  const gitPushCommand = `git remote add origin ${cleanRepoUrl}\ngit branch -M main\ngit push -u origin main`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FolderCode className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-slate-100 text-sm tracking-tight block">
                Рабочее пространство проекта
              </span>
              <span className="text-xs text-slate-400 block">
                Google AI Studio Build · Репозиторий инициализирован
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('github')}
              className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 rounded-md font-medium hover:bg-purple-500/25 transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              Экспорт на GitHub
            </button>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Git готов
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        {/* Hero Notice Banner */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-850 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-purple-400 uppercase tracking-wider mb-2">
              <Github className="w-4 h-4 text-purple-400" />
              Сервис: GitHub (вы искали «GITHUG»)
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Как перенести ваш проект на GitHub
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Вы имели в виду <strong className="text-white font-semibold">GitHub</strong> (гитхаб) — главную мировую платформу для хранения кода.
              Мы уже инициализировали локальный Git-репозиторий и создали первый коммит со всеми файлами.
              Ниже пошаговая инструкция, как отправить код в ваш аккаунт на GitHub.
            </p>

            {/* Quick Summary Cards */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[11px] font-mono text-purple-400 block mb-1">ШАГ 1</span>
                <div className="text-xs font-semibold text-slate-200 mb-1">
                  Открыть GitHub
                </div>
                <p className="text-[11px] text-slate-400">
                  Зайдите на <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-300 underline inline-flex items-center gap-0.5">github.com <ExternalLink className="w-2.5 h-2.5" /></a> и нажмите кнопку <strong>«New»</strong>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[11px] font-mono text-purple-400 block mb-1">ШАГ 2</span>
                <div className="text-xs font-semibold text-slate-200 mb-1">
                  Создать репозиторий
                </div>
                <p className="text-[11px] text-slate-400">
                  Укажите имя проекта (например, <code className="text-slate-300">my-project</code>) и скопируйте его ссылку <code className="text-purple-300">.git</code>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[11px] font-mono text-purple-400 block mb-1">ШАГ 3</span>
                <div className="text-xs font-semibold text-slate-200 mb-1">
                  Отправить файлы (Push)
                </div>
                <p className="text-[11px] text-slate-400">
                  Выполните команду или загрузите файлы через браузер прямо на GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('github')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'github'
                ? 'bg-purple-600/20 text-purple-200 border border-purple-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Github className="w-3.5 h-3.5 text-purple-400" />
            Инструкция по переносу на GitHub
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'status'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            Что сделать с проектом?
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'ideas'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Идеи и шаблоны
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 shrink-0 ${
              activeTab === 'structure'
                ? 'bg-slate-800 text-white border border-slate-700'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-400" />
            Файлы проекта
          </button>
        </div>

        {/* Tab: GitHub Guide */}
        {activeTab === 'github' && (
          <div className="space-y-6">
            {/* Interactive Command Helper */}
            <div className="bg-slate-900/80 border border-purple-500/30 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                  <h2 className="text-base font-semibold text-white">
                    Генератор команд для отправки в ваш репозиторий
                  </h2>
                </div>
                <span className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded">
                  git commit уже выполнен
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Вставьте ссылку на ваш созданный репозиторий GitHub (например, <code className="text-purple-300 font-mono">https://github.com/пользователь/репозиторий.git</code>), чтобы получить точные команды для терминала:
              </p>

              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  value={githubRepoUrl}
                  onChange={(e) => setGithubRepoUrl(e.target.value)}
                  placeholder="https://github.com/ваш-логин/ваш-репозиторий.git"
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 font-mono"
                />
              </div>

              <div className="bg-slate-950 rounded-lg border border-slate-800 p-4 font-mono text-xs text-purple-300 relative">
                <div className="text-slate-500 select-none text-[11px] mb-2"># Выполните эти команды:</div>
                <pre className="overflow-x-auto whitespace-pre leading-relaxed text-slate-200">
                  {gitPushCommand}
                </pre>
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    При первом push GitHub запросит авторизацию или Personal Access Token
                  </span>
                  <button
                    onClick={() => handleCopy(gitPushCommand, 'git-push')}
                    className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-sans font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedId === 'git-push' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedId === 'git-push' ? 'Скопировано!' : 'Скопировать команды'}
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed step-by-step 3 Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Method 1 */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  <Terminal className="w-4 h-4" />
                  Способ 1: Через Git (для разработчиков)
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Связывание с GitHub через консоль
                </h3>
                <ol className="text-xs text-slate-300 space-y-2.5 list-decimal list-inside leading-relaxed">
                  <li>Зайдите на <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/new</a>.</li>
                  <li>Введите название репозитория и нажмите зеленую кнопку <strong>«Create repository»</strong>.</li>
                  <li>Скопируйте ссылку формата <code className="bg-slate-950 px-1 py-0.5 rounded text-cyan-300">https://github.com/...</code>.</li>
                  <li>Привяжите удаленный репозиторий и отправьте код:
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800 font-mono text-[11px] mt-1.5 space-y-1">
                      <div className="text-slate-400">git remote add origin ССЫЛКА</div>
                      <div className="text-slate-400">git push -u origin main</div>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Method 2 */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <Globe className="w-4 h-4" />
                  Способ 2: Через веб-интерфейс GitHub (без терминала)
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Загрузка файлов мышкой прямо в браузере
                </h3>
                <ol className="text-xs text-slate-300 space-y-2.5 list-decimal list-inside leading-relaxed">
                  <li>Создайте новый репозиторий на <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-emerald-400 underline">github.com</a>.</li>
                  <li>На странице пустого репозитория нажмите на ссылку <strong>«uploading an existing file»</strong>.</li>
                  <li>Перетащите файлы проекта (<code className="bg-slate-950 px-1 py-0.5 rounded text-emerald-300">src/</code>, <code className="bg-slate-950 px-1 py-0.5 rounded text-emerald-300">package.json</code>, <code className="bg-slate-950 px-1 py-0.5 rounded text-emerald-300">index.html</code> и т.д.).</li>
                  <li>Нажмите внизу зеленую кнопку <strong>«Commit changes»</strong>. Готово!</li>
                </ol>
              </div>
            </div>

            {/* What files to keep/ignore */}
            <div className="bg-slate-900/40 border border-slate-850 rounded-xl p-5 flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Важная деталь безопасности:</strong> В проекте уже настроен файл <code className="text-slate-300 bg-slate-950 px-1 py-0.5 rounded">.gitignore</code>. Папка <code className="text-amber-300">node_modules/</code> и секретные ключи <code className="text-amber-300">.env</code> автоматически исключены и не попадут в публичный репозиторий на GitHub.
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Action Guide */}
        {activeTab === 'status' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
                <h2 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  Отправьте запрос в чат
                </h2>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Опишите, каким должен быть ваш проект. Например: «Сделай личный кабинет с профилем и списком заказов», «Сделай каталог автозапчастей с фильтром по маркам» или «Восстанови приложение для учета финансов».
                </p>

                <div className="space-y-3">
                  <textarea
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Например: Сделай интерактивное приложение для управления задачами с фильтрами, приоритетами и возможностью экспорта..."
                    rows={3}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Напишите это в чат диалога со мной ниже или скопируйте
                    </span>
                    <button
                      onClick={handleCopyCustom}
                      disabled={!customPrompt.trim()}
                      className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedCustom ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedCustom ? 'Скопировано!' : 'Скопировать текст'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Status details */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-slate-400" />
                  Установленный стек и возможности
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <span className="text-slate-400 block text-[11px]">Фреймворк</span>
                    <span className="text-slate-200 font-medium">React 19</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <span className="text-slate-400 block text-[11px]">Сборщик</span>
                    <span className="text-slate-200 font-medium">Vite 8</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <span className="text-slate-400 block text-[11px]">Стилизация</span>
                    <span className="text-slate-200 font-medium">Tailwind CSS 4</span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                    <span className="text-slate-400 block text-[11px]">Иконки & Анимации</span>
                    <span className="text-slate-200 font-medium">Lucide + Motion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar quick info */}
            <div className="space-y-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  Ссылка на приложение
                </h3>
                <p className="text-xs text-slate-300 mb-3">
                  Приложение в реальном времени работает и собирается в этом окне предварительного просмотра.
                </p>
                <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400 break-all">
                  Порт 3000 (Development Server)
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  Как начать?
                </h3>
                <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside">
                  <li>Напишите в ответ сообщение с описанием вашего проекта.</li>
                  <li>Я сразу создам компоненты, интерфейс и логику.</li>
                  <li>Изменения появятся прямо здесь на экране.</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Idea Presets */}
        {activeTab === 'ideas' && (
          <div className="grid sm:grid-cols-2 gap-4">
            {PROJECT_IDEAS.map((idea) => (
              <div
                key={idea.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-medium text-cyan-400 mb-1">
                    {idea.category}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {idea.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {idea.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleCopy(idea.prompt, idea.id)}
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 font-medium cursor-pointer"
                  >
                    {copiedId === idea.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано в буфер!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Скопировать запрос</span>
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    Вставить в чат <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Structure */}
        {activeTab === 'structure' && (
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <FolderCode className="w-4 h-4 text-cyan-400" />
              Структура проекта
            </h3>
            <div className="font-mono text-xs text-slate-300 bg-slate-950 p-4 rounded-lg border border-slate-850 space-y-1.5 overflow-x-auto">
              <div>📁 /</div>
              <div className="pl-4">├── 📁 .git/ <span className="text-purple-400 font-semibold">(Локальный Git-репозиторий инициализирован)</span></div>
              <div className="pl-4">├── 📄 package.json <span className="text-slate-500">(React 19, Vite, Tailwind CSS, Lucide, Motion)</span></div>
              <div className="pl-4">├── 📄 vite.config.ts <span className="text-slate-500">(Конфигурация сборки и сервера)</span></div>
              <div className="pl-4">├── 📄 index.html <span className="text-slate-500">(Точка входа HTML)</span></div>
              <div className="pl-4">├── 📁 src/</div>
              <div className="pl-8">├── 📄 main.tsx <span className="text-slate-500">(Рендеринг приложения в DOM)</span></div>
              <div className="pl-8">├── 📄 App.tsx <span className="text-emerald-400 font-semibold">(Главный компонент интерфейса — сейчас открыт)</span></div>
              <div className="pl-8">└── 📄 index.css <span className="text-slate-500">(Стили Tailwind CSS)</span></div>
            </div>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Вы можете попросить добавить любые компоненты, страницы, стили или функции, и они сразу появятся в этой структуре.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-850 py-4 text-center text-xs text-slate-500">
        Google AI Studio Build · Рабочая среда готова к вашим инструкциям
      </footer>
    </div>
  );
}
