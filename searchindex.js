Search.setIndex({envversion:46,filenames:["api/api_backend","api/api_backend_adapter","api/api_binder","api/api_connector","api/api_event","api/api_exception","api/api_mapper","api/api_queue","api/api_session","api/api_synchronizer","guides/bootstrap_connector","guides/code_overview","guides/concepts","guides/multiprocessing","index","project/changes","project/contribute","project/contributors","project/license","project/roadmap"],objects:{"connector.backend":{Backend:[0,2,1,""]},"connector.backend.Backend":{get_class:[0,3,1,""],match:[0,3,1,""],parent:[0,1,1,""],register_class:[0,3,1,""],service:[0,1,1,""],version:[0,1,1,""]},"connector.backend_model":{ConnectorBackend:[0,2,1,""],ExternalBinding:[0,2,1,""]},"connector.backend_model.ConnectorBackend":{get_backend:[0,3,1,""],name:[0,1,1,""],version:[0,1,1,""]},"connector.backend_model.ExternalBinding":{sync_date:[0,1,1,""]},"connector.connector":{Binder:[3,2,1,""],ConnectorEnvironment:[3,2,1,""],ConnectorUnit:[3,2,1,""],MetaConnectorUnit:[3,2,1,""],get_openerp_module:[3,7,1,""],install_in_connector:[3,7,1,""]},"connector.connector.Binder":{bind:[3,3,1,""],to_backend:[3,3,1,""],to_openerp:[3,3,1,""],unwrap_binding:[3,3,1,""],unwrap_model:[3,3,1,""]},"connector.connector.ConnectorEnvironment":{backend:[3,1,1,""],backend_record:[3,1,1,""],env:[3,1,1,""],get_connector_unit:[3,3,1,""],model:[3,1,1,""],model_name:[3,1,1,""],pool:[3,1,1,""],session:[3,1,1,""],set_lang:[3,3,1,""]},"connector.connector.ConnectorUnit":{binder_for:[3,3,1,""],env:[3,1,1,""],environment:[3,1,1,""],get_binder_for_model:[3,3,1,""],get_connector_unit_for_model:[3,3,1,""],localcontext:[3,1,1,""],match:[3,6,1,""],model:[3,1,1,""],unit_for:[3,3,1,""]},"connector.connector.MetaConnectorUnit":{for_model_names:[3,1,1,""],model_name:[3,1,1,""]},"connector.event":{Event:[4,2,1,""],on_record_create:[4,5,1,""],on_record_unlink:[4,5,1,""],on_record_write:[4,5,1,""]},"connector.event.Event":{fire:[4,3,1,""],has_consumer_for:[4,3,1,""],subscribe:[4,3,1,""],unsubscribe:[4,3,1,""]},"connector.exception":{ConnectorException:[5,4,1,""],FailedJobError:[5,4,1,""],IDMissingInBackend:[5,4,1,""],InvalidDataError:[5,4,1,""],JobError:[5,4,1,""],ManyIDSInBackend:[5,4,1,""],MappingError:[5,4,1,""],NetworkRetryableError:[5,4,1,""],NoConnectorUnitError:[5,4,1,""],NoExternalId:[5,4,1,""],NoSuchJobError:[5,4,1,""],NotReadableJobError:[5,4,1,""],NothingToDoJob:[5,4,1,""],RetryableJobError:[5,4,1,""]},"connector.queue":{job:[7,0,0,"-"],model:[7,0,0,"-"],queue:[7,0,0,"-"],worker:[7,0,0,"-"]},"connector.queue.job":{Job:[7,2,1,""],JobStorage:[7,2,1,""],OpenERPJobStorage:[7,2,1,""],job:[7,7,1,""],related_action:[7,7,1,""]},"connector.queue.job.Job":{args:[7,1,1,""],cancel:[7,3,1,""],canceled:[7,1,1,""],date_created:[7,1,1,""],date_done:[7,1,1,""],date_enqueued:[7,1,1,""],date_started:[7,1,1,""],description:[7,1,1,""],eta:[7,1,1,""],exc_info:[7,1,1,""],func:[7,1,1,""],func_name:[7,1,1,""],func_string:[7,1,1,""],kwargs:[7,1,1,""],max_retries:[7,1,1,""],model_name:[7,1,1,""],perform:[7,3,1,""],postpone:[7,3,1,""],priority:[7,1,1,""],related_action:[7,3,1,""],result:[7,1,1,""],retry:[7,1,1,""],set_done:[7,3,1,""],set_enqueued:[7,3,1,""],set_failed:[7,3,1,""],set_pending:[7,3,1,""],set_started:[7,3,1,""],state:[7,1,1,""],user_id:[7,1,1,""],uuid:[7,1,1,""],worker_uuid:[7,1,1,""]},"connector.queue.job.JobStorage":{exists:[7,3,1,""],load:[7,3,1,""],store:[7,3,1,""]},"connector.queue.job.OpenERPJobStorage":{db_record:[7,3,1,""],db_record_from_uuid:[7,3,1,""],enqueue:[7,3,1,""],enqueue_resolve_args:[7,3,1,""],exists:[7,3,1,""],load:[7,3,1,""],store:[7,3,1,""]},"connector.queue.model":{QueueJob:[7,2,1,""],QueueWorker:[7,2,1,""],RequeueJob:[7,2,1,""]},"connector.queue.model.QueueJob":{active:[7,1,1,""],autovacuum:[7,3,1,""],button_done:[7,3,1,""],company_id:[7,1,1,""],date_created:[7,1,1,""],date_done:[7,1,1,""],date_enqueued:[7,1,1,""],date_started:[7,1,1,""],eta:[7,1,1,""],exc_info:[7,1,1,""],func:[7,1,1,""],func_string:[7,1,1,""],max_retries:[7,1,1,""],model_name:[7,1,1,""],name:[7,1,1,""],open_related_action:[7,3,1,""],priority:[7,1,1,""],requeue:[7,3,1,""],result:[7,1,1,""],retry:[7,1,1,""],state:[7,1,1,""],user_id:[7,1,1,""],uuid:[7,1,1,""],worker_id:[7,1,1,""],write:[7,3,1,""]},"connector.queue.model.QueueWorker":{assign_jobs:[7,3,1,""],assign_then_enqueue:[7,3,1,""],date_alive:[7,1,1,""],date_start:[7,1,1,""],enqueue_jobs:[7,3,1,""],job_ids:[7,1,1,""],pid:[7,1,1,""],uuid:[7,1,1,""],worker_timeout:[7,1,1,""]},"connector.queue.model.RequeueJob":{job_ids:[7,1,1,""],requeue:[7,3,1,""]},"connector.queue.queue":{JobsQueue:[7,2,1,""]},"connector.queue.queue.JobsQueue":{dequeue:[7,3,1,""],enqueue:[7,3,1,""]},"connector.queue.worker":{Worker:[7,2,1,""],WorkerWatcher:[7,2,1,""],start_service:[7,7,1,""]},"connector.queue.worker.Worker":{enqueue_job_uuid:[7,3,1,""],job_storage_class:[7,1,1,""],queue_class:[7,1,1,""],run:[7,3,1,""],run_job:[7,3,1,""]},"connector.queue.worker.WorkerWatcher":{available_db_names:[7,8,1,""],check_alive:[7,3,1,""],run:[7,3,1,""],worker_for_db:[7,3,1,""],worker_lost:[7,3,1,""]},"connector.session":{ConnectorSession:[8,2,1,""],ConnectorSessionHandler:[8,2,1,""]},"connector.session.ConnectorSession":{browse:[8,3,1,""],change_context:[8,3,1,""],change_user:[8,3,1,""],close:[8,3,1,""],commit:[8,3,1,""],context:[8,1,1,""],cr:[8,1,1,""],create:[8,3,1,""],env:[8,1,1,""],from_env:[8,6,1,""],is_module_installed:[8,3,1,""],pool:[8,1,1,""],read:[8,3,1,""],rollback:[8,3,1,""],search:[8,3,1,""],uid:[8,1,1,""],unlink:[8,3,1,""],write:[8,3,1,""]},"connector.session.ConnectorSessionHandler":{context:[8,1,1,""],db_name:[8,1,1,""],session:[8,3,1,""],uid:[8,1,1,""]},"connector.unit":{backend_adapter:[1,0,0,"-"],binder:[2,0,0,"-"],mapper:[6,0,0,"-"],synchronizer:[9,0,0,"-"]},"connector.unit.backend_adapter":{BackendAdapter:[1,2,1,""],CRUDAdapter:[1,2,1,""]},"connector.unit.backend_adapter.CRUDAdapter":{"delete":[1,3,1,""],create:[1,3,1,""],read:[1,3,1,""],search:[1,3,1,""],search_read:[1,3,1,""],write:[1,3,1,""]},"connector.unit.mapper":{ExportMapChild:[6,2,1,""],ExportMapper:[6,2,1,""],ImportMapChild:[6,2,1,""],ImportMapper:[6,2,1,""],MapChild:[6,2,1,""],MapOptions:[6,2,1,""],MapRecord:[6,2,1,""],Mapper:[6,2,1,""],MappingDefinition:[6,2,1,""],MetaMapper:[6,2,1,""],backend_to_m2o:[6,7,1,""],changed_by:[6,7,1,""],convert:[6,7,1,""],m2o_to_backend:[6,7,1,""],mapping:[6,7,1,""],none:[6,7,1,""],only_create:[6,7,1,""]},"connector.unit.mapper.ImportMapChild":{format_items:[6,3,1,""]},"connector.unit.mapper.MapChild":{format_items:[6,3,1,""],get_item_values:[6,3,1,""],get_items:[6,3,1,""],skip_item:[6,3,1,""]},"connector.unit.mapper.MapRecord":{parent:[6,1,1,""],source:[6,1,1,""],update:[6,3,1,""],values:[6,3,1,""]},"connector.unit.mapper.Mapper":{children:[6,1,1,""],direct:[6,1,1,""],finalize:[6,3,1,""],map_methods:[6,1,1,""],map_record:[6,3,1,""],options:[6,1,1,""]},"connector.unit.mapper.MappingDefinition":{changed_by:[6,1,1,""],only_create:[6,1,1,""]},"connector.unit.synchronizer":{DeleteSynchronizer:[9,1,1,""],Deleter:[9,2,1,""],ExportSynchronizer:[9,1,1,""],Exporter:[9,2,1,""],ImportSynchronizer:[9,1,1,""],Importer:[9,2,1,""],Synchronizer:[9,2,1,""]},"connector.unit.synchronizer.Synchronizer":{backend_adapter:[9,1,1,""],binder:[9,1,1,""],mapper:[9,1,1,""],run:[9,3,1,""]},connector:{backend:[0,0,0,"-"],backend_model:[0,0,0,"-"],connector:[3,0,0,"-"],event:[4,0,0,"-"],exception:[5,0,0,"-"],session:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","data","Python data"],"6":["py","classmethod","Python class method"],"7":["py","function","Python function"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:exception","5":"py:data","6":"py:classmethod","7":"py:function","8":"py:staticmethod"},terms:{"0x53465f0":7,"0x5357510":4,"0x5357590":4,"0x53575d0":4,"__doc__":7,"__init__":10,"__name__":7,"__openerp__":10,"_backend_typ":[0,10],"_base_backend_adapt":15,"_base_bind":15,"_base_mapp":15,"_build":16,"_call":11,"_column":0,"_context":8,"_descript":[0,10,11],"_export_invoic":11,"_get_lines_info":11,"_inherit":[0,7,10,11,12],"_magento_model":11,"_map_method":6,"_model_nam":[0,11],"_modul":3,"_name":[0,10,11,15],"_removal_interv":7,"_select_vers":[0,10],"_sql_constraint":0,"abstract":[0,3,8],"b\u00e9al":17,"boolean":[6,7],"break":7,"case":[0,6,7,8,11,18],"char":[0,7,10,11],"class":[0,1,3,4,6,7,8,9],"default":[6,7,10],"export":[6,7,9,11,12,15],"final":[0,4,6,7,14,18],"float":6,"function":[3,4,6,7,10,11,12,15,18],"import":[6,9,10,11,12,14,15,18],"int":[0,3,7],"jo\u00ebl":17,"long":[6,10,18],"new":[3,4,8,10,11,12,14,15],"null":[7,11],"public":18,"return":[0,1,3,4,6,7,8,9,10,11,15,18],"rh\u00f4nalia":17,"st\u00e9phane":15,"static":7,"true":[0,3,4,6,7,8,10,11,15],"try":7,"void":18,a_funct:6,abil:[12,14,18],abl:[0,3,4,7,11,12],about:[11,18],abov:[0,6,11,18],absenc:18,absolut:18,abstractmodel:[0,3,10,15],accept:[16,18],access:[6,7,11,15,18],accompani:[12,18],accomplish:18,accord:[1,3,6,7,11,18],account:11,accountinvoiceadapt:11,accross:12,achiev:18,acknowledg:18,acquir:18,across:[0,12,18],acson:17,act_window:7,action:[7,12,13,15,18],activ:[4,6,7,18],actual:[16,18],adapt:0,add:[0,6,7,10,12,14,15,16,18,19],add_checkpoint:10,addit:[11,14,18],addon:[0,8,10,11,15],address:18,adopt:18,advanc:0,advancedimportmapp:0,advers:18,advic:16,advis:18,affect:18,affero:18,affirm:18,after:[6,7,16,18],against:18,aggreg:18,agpl3:18,agpl:[10,14,18],agre:[18,19],agreement:18,akret:[14,17],alexandr:17,alia:[6,7,9],aliv:[7,12],all:[0,4,6,7,11,12,14,15,16,17,18,19],alleg:18,allow:[0,6,7,8,17,18],along:18,alongsid:13,alreadi:[0,6,7,11,18],also:[0,4,6,7,10,11,12,15,16,18],altern:18,alwai:[4,6,7,8,12],amazon:14,among:18,amount:17,amp:14,ancillari:18,ani:[3,6,11,14,18],anoth:[0,3,6,12,15],anti:18,anybox:[16,17],anyon:18,anyth:[12,18],apertoso:17,api:[0,3,8,10,11],app:14,appear:7,appli:[6,12,18],applic:[10,18],approach:16,appropri:[0,18],approxim:18,arbitrari:6,archiv:18,arg:[0,1,3,4,6,7,8],argument:[4,6,7,8,13,15],aris:18,around:12,arrang:18,arriv:7,arthur:17,articl:18,articul:12,ask:[0,12],assert:[7,18],asset:18,assign:[6,7,12,15],assign_job:7,assign_then_enqueu:7,associ:[7,18],assum:18,assumpt:18,asynchron:14,atom:7,attach:[7,8,18],attempt:18,attr:[3,6],attribut:[0,3,6,7,15,18],auguria:17,author:[10,18],auto_join:7,automat:[7,10,18],autovacuum:7,avail:[0,6,7,10,14,18],available_db_nam:7,avanzosc:17,avoid:[12,15],awai:18,backend_adapt:[1,3,9,11,12,15],backend_id:[0,10,11],backend_model:0,backend_record:[3,10],backend_to_m2o:6,backendadapt:[1,3,9,11,12],backward:15,baconni:[14,17],bar:4,base:[0,1,3,4,5,6,7,8,9,12],base_class:[0,3],basemodel:[6,8,15],basi:6,basic:[0,3,7,12,18],batteri:13,beau:17,becaus:[0,9,10,11,13,15,18],becom:18,bee:[4,17],been:[4,5,6,7,14,15,17,18],befor:[6,7],behalf:18,behavior:0,believ:18,bello:17,belong:[11,16],below:[12,18],benefit:18,benoit:17,besid:10,bessi:17,best:18,better:18,between:[0,3,7,11,12,14,18],beyond:18,bidoul:15,bin:16,bind:[0,3,6,7],binder_for:[3,12,15],binding_id:[3,11],bit:16,bitbucket:16,block:[14,15],bodi:18,boilerpl:10,bool:[0,7],bootstrap:[10,16],both:[12,18],box:7,brief:18,broad:12,broken:15,brows:[3,8,10,11,15],browsabl:3,browse_record:3,buffer:19,bug:16,build:[6,10,11,14,16],buildout:[13,16],built:3,builtin:13,burn:17,busi:[10,18],button:[7,15],button_don:7,call:[0,3,4,6,7,10,11,12,15,18],callabl:7,camptocamp:[14,17],can:[0,1,4,5,6,7,10,11,12,15,16,18,19],cancel:7,candid:7,cannot:[5,18],capabl:[3,12],care:6,carri:18,cascad:[0,7,11],catalog:[0,16],categori:[0,10],caus:[5,18],cautious:0,ceas:18,certain:[14,18],cessat:18,cfg:16,chambreuil:17,chang:[0,3,6,14],change_context:[8,10,15],change_us:8,changed_bi:6,channel:19,character:18,charg:18,check:[6,7],check_al:7,child:[0,6,12],children:6,choic:14,choos:[11,18],christoph:17,circumst:[0,18],circumvent:18,civil:18,claim:18,classmethod:[3,8],clean:15,clear:[18,19],client:[0,7],close:[8,18],closur:6,cls_or_func:3,clutter:12,cmi:14,code:[0,6,10],coffe:10,coffee1900:10,coffee2900:10,coffee_id:10,coffee_model:10,coffeebackend:10,coffeebind:10,collect:18,column1:7,column2:7,column:[0,7],com:[16,19],combel:17,combin:18,come:[12,18],command:[6,13,18],comment:11,commerc:[12,14,16],commerci:18,commit:[7,8,15,18],common:[11,12,18],commun:[15,18],comodel_nam:[0,7,10,11],compani:[14,17],company_id:7,compat:[3,10],compil:[16,18],complet:[11,16],compli:18,complianc:18,compon:18,comput:[6,18],compute_st:6,concept:11,concern:[0,18],concret:[0,6,10,12],condit:18,config:13,configfil:13,configur:[6,10,13],conflict:0,confus:15,connect:[10,14,18],connector:[0,1],connector_backend:[0,12],connector_coffe:10,connector_ecommerc:12,connector_env:[1,3,6,9],connector_magento:16,connector_unit_class:3,connector_xxx:16,connectorbackend:0,connectordb:16,connectorenviron:[0,3,15],connectorexcept:5,connectorsess:[0,3,4,7,8,11,12],connectorsessionhandl:8,connectorunit:[0,1,3,5,6,9],consequ:18,consequenti:18,consid:[6,7,18],consist:18,consolid:0,conspicu:18,constitut:18,constru:18,consum:[3,4,11,12,18],contact:18,contain:[0,3,4,6,8,12,13,15,18],content:[7,18],context:[3,7,8,10,11,12,15,18],contextu:19,continu:18,contractu:18,contradict:18,contrast:18,contribut:14,control:18,conv_typ:6,convei:18,conveni:18,convent:[8,10],convers:[6,11,12],convert:[6,12],convey:18,cooper:18,copi:[6,18],copyleft:18,copyright:18,corp:17,correct:[3,18],correspond:[3,6,7,18],cost:18,could:[0,15,18],counterclaim:18,countri:[6,18],country_id:6,cours:10,court:18,coven:18,cover:[3,18],coverag:18,creat:[0,1,3,4,6,7,8,10,11,12,15],createdb:16,creation:[6,12,15],criteria:1,criterion:18,crm:14,cron:[7,12],cronwork:12,cross:18,crud:[11,15],crudadapt:1,cure:18,current:[0,3,4,6,7,8,11,15],cursor:8,custom:[0,6,10,12,14,18],customari:18,customarili:18,dai:[7,14,18],damag:18,data:[0,5,7,9,10,11,12,18],databas:[7,8,12,15,16],date:[0,7,11,18],date_al:7,date_cr:7,date_don:7,date_enqueu:7,date_start:7,datetim:[7,11],david:17,db_name:[7,8],db_record:7,db_record_from_uuid:7,dead:[7,12],debonix:17,decemb:18,decid:18,declar:[0,6],declin:18,decor:[4,6,7,11,12],decoupl:12,dedic:19,deem:18,def:[0,4,6,7,10,11],default_lang_id:10,default_warehous:6,defect:18,defend:18,defens:18,defin:[0,6,11,12,18],definit:[0,10,18],del:17,delai:[7,9,11,12,15],delay_export_account_invoic:11,deleg:7,delet:[1,4,7,9,12,15],deletesynchron:[9,15],deni:18,denomin:18,depend:[3,10,16],deprec:[3,15],depriv:18,dequeu:7,describ:12,descript:[7,10,15],design:[14,17,18],destin:6,destroi:12,detail:[15,18],determin:18,develop:12,dict:6,dictionari:[7,15],differ:[0,3,7,12,18],dijkstra:17,direct:[0,6,12,14,15,18,19],directli:18,disclaim:18,discrimin:7,discriminatori:18,discuss:11,displai:[0,7,15,18],distinguish:18,distribut:18,dive:16,dlanguag:16,do_other_th:4,do_someth:4,do_something_product2:4,do_something_product:4,document:[10,12,15,16,18],doe:[3,5,6,7,13,14,18],domain:[7,8,16],done:[0,6,7,13,15,17],doubt:18,downstream:18,drupal:14,duplic:6,durabl:18,dure:[5,17],dwell:18,dynam:18,each:[0,3,4,6,7,10,12,18,19],earlier:[7,18],eas:12,easi:14,easili:14,ebai:14,edit:[10,16],editor:15,eeze:17,effect:[15,18],effort:18,either:[0,6,7,8,18],electron:18,elico:17,els:[3,10,12],email:11,embodi:18,employ:18,empti:[6,16],en_u:10,enabl:18,encourag:18,end:[6,8,18],enforc:18,enova:17,enqueu:[7,12,13,19],enqueue_job:7,enqueue_job_uuid:7,enqueue_resolve_arg:7,ensur:[8,18],enter:18,entir:18,entiti:[10,18],env:[3,6,8,10,11,12,15],environ:[3,8],equal:7,equival:18,eric:17,erp:14,error:[5,8,19],especi:16,essenti:18,establish:8,estim:7,eta:7,even:[10,18],event:3,eventu:7,ever:18,everi:7,everyon:18,exact:[0,18],exampl:[0,3,6,7,10,11,12,13,14,16,18],exc_info:7,except:0,excerpt:11,exclud:18,exclus:18,excus:18,execut:[4,6,7,11,12,18],exercis:18,exist:[0,5,6,7,9,10,16],exit:7,expect:[6,7,18],explicitli:[6,18],exponenti:0,export_invoic:11,export_one_th:7,export_partn:7,export_product:7,exportmapchild:6,exportmapp:6,exportsynchron:[9,15],expos:11,express:18,expressli:18,extend:[0,6,8,12,14,18],extens:[0,7,18],extent:18,extern:[0,1,3,5,6,10,11,12],external_id:3,externalbind:0,extra_arg:7,extract:7,fabio:17,facil:[18,19],facilit:18,fail:[7,15,18],failedjoberror:5,failur:[5,18],fair:18,fals:[3,6,7,10,11],famili:18,far:6,fashion:18,favor:[3,18],fayol:17,featur:10,fee:18,fell:17,few:11,field:[0,4,6,7,8,10,11,12,15],field_nam:[4,15],field_valu:[4,15],file:[10,13,16,18],filter:[3,4,6,12],find:[0,3,6,11,12,18],fire:[3,4,12],first:[4,7,10,15,18],fit:18,fix:[15,18],flexibl:14,flow:[11,12,18],flush:19,follow:[4,6,7,10,16,18],foo:4,for_creat:6,for_model_nam:[3,15],forbid:18,forc:[6,11,14,18],form:[7,15,18],format:[6,18],format_item:6,found:[0,5,6,10,12,18],foundat:18,framework:[0,3,10,11,12],free:18,freedom:18,freeed:12,french:17,from:[0,3,4,5,6,7,8,9,10,11,12,14,15,16,18,19],from_env:8,frozendict:15,fsf:18,fulfil:18,full:[7,14,18],func:[6,7],func_nam:7,func_str:7,function_nam:7,fund:17,funder:17,further:[6,18],futur:18,fuzzi:16,gener:[0,7,8,10,11,14,18],genericadapt:11,get:[6,7,10,11,12,18],get_backend:[0,3],get_binder_for_model:[3,15],get_class:0,get_connector_unit:[0,3,11],get_connector_unit_for_model:[3,15],get_environ:[10,11],get_item:6,get_item_valu:6,get_openerp_modul:3,gettext:16,github:[14,16,19],give:[3,7,11,12,18],given:[0,3,4,6,7,15,18],global:4,glpi:14,glue:0,gnu:18,goal:18,googl:14,goran:17,govern:18,gpl:18,grand:17,grant:18,graph:0,grati:18,greater:6,greatest:18,guarante:18,guewen:[14,17],guid:10,guillaum:17,guillot:17,gusto:17,had:[5,18],handl:[0,1,6,7,8],hans:17,happen:[11,12],has_consumer_for:4,have:[0,3,4,5,6,7,10,12,13,15,16,18],hearten:18,help:19,helper:10,here:[0,6,11,12,15,16,17,19],hereaft:18,herit:6,hierarchi:11,high:[12,14],higher:7,histor:16,hold:[0,7],holder:18,hook:[6,12],hope:18,horizont:0,host:18,hour:7,household:18,how:[0,12,14,18],howev:[0,6,13,18],hsp:17,html:[15,16],http:[12,15,16,18,19],human:7,idea:[11,12,16,18],ideal:16,identifi:18,idiom:6,idmissinginbackend:5,imagin:10,implement:[0,1,3,6,10,11,12,14,18],impli:18,importmapchild:6,importmapp:[0,6],importsynchron:[9,15],impos:18,improv:[15,18],inabl:18,inaccur:18,inact:6,inc:18,incident:18,includ:[6,13,18],include_com:11,inclus:18,incompat:15,incorpor:18,increas:7,indemnif:18,independ:[13,18],index:14,indic:[7,8],individu:18,industri:18,infinit:7,inform:[1,6,7,16,18],infring:18,inherit:[0,3,6,10,15],init:16,initi:[7,18],inito:17,input_field:6,insid:15,instal:[0,3,7,8],install_in_connector:[3,10,15],instanc:[0,3,6,7,8,9,12,15],instanci:9,instanti:4,instead:[0,15],intact:18,intal:3,integ:[0,7,8],integr:11,intend:[3,6,7,18],intent:18,interact:[0,12,18],interchang:18,interest:[12,18],interf:18,interfac:[7,11,12,18],intern:3,interpret:18,interprocess:13,intim:18,intl:16,introspect:6,invalid:[5,18],invaliddataerror:5,invers:7,inverse_nam:7,invoic:11,invoice_export:11,irrevoc:18,is_module_instal:8,ish:6,itali:17,item:[6,11,18],items_valu:6,itself:[7,10,12,18],job:5,job_:7,job_id:7,job_storage_class:7,job_uuid:7,joberror:5,jobsqueu:[7,12],jobstorag:7,join:7,juliu:17,just:[10,11,15],karg:7,keep:[3,7,18,19],kei:[0,3,5,6,18],kernel:18,key1:8,key2:8,keyword:[4,6,7,15],kind:[14,18],know:[3,6,7,8,12,18],knowingli:18,knowledg:18,kwarg:[0,1,4,6,7],kwd:[3,8],lambda:7,lang:[3,10,15],lang_cod:[10,15],languag:[3,10,16,18],larger:18,last:[0,11,16],later:[5,6,7,11,18],latest:16,latter:[11,13],launch:13,launchpad:15,laurent:[15,17],law:18,lawsuit:18,lc_messag:16,lead:18,learn:14,least:[0,3,4,6,18],leav:14,left:10,legal:18,length:[0,7],leonardo:17,let:[0,18],level:[3,12,15],liabil:18,liabl:18,librari:18,licens:[10,14],license:18,licensor:18,like:[0,6,15,18],likewis:18,limit:[0,6,7,8,18],line:[0,6,7,10,11,12,18],line_id:6,lines_info:11,link:[0,3,11,12,18],linko:17,list:[0,1,3,6,7,14,15,17,18,19],listen:[4,15],litig:18,littl:10,live:3,load:[7,8,10,12],local:[16,18],localcontext:3,locat:[0,10,13],log:19,logfil:13,logger:19,logic:17,longer:[7,15],look:[8,10,16],loop:7,loss:18,lot:10,low:[7,15],luc:[14,17],m2o_to_backend:6,machin:[10,18],made:18,magento1700:[0,11],magento2000:0,magento:[0,3,6,10,11,12,13,14,16,17],magento_backend:0,magento_country_id:6,magento_id:[0,11,15],magento_model:0,magento_ord:11,magento_order_id:11,magento_specif:0,magento_uniq:0,magentoaccountinvoic:11,magentobackend:0,magentoerpconnect:[0,16],magentoinvoicesynchron:11,magentorespartnercategori:0,mai:[9,10,16,18,19],mail:[14,15,18],mail_notif:11,main:[6,7,11],maintain:14,maison:17,major:18,make:[7,16,18],manag:[8,14],mandatori:[0,6,7],mani:[5,6,8,10,12,18],manner:[0,18],many2mani:7,many2on:[0,6,7,10,11],manyidsinbackend:5,map:[0,3,5,6],map_method:6,map_record:6,mapchild:6,mapopt:6,mapper:[0,3],mappingdefinit:6,mappingerror:5,maprecord:6,marcelo:17,march:18,mark:[17,18],martinelli:17,mask:18,match:[0,3],materi:18,matter:10,maurer:[14,17],max_job:7,max_retri:7,maxim:[7,17],maximum:[0,7],mayb:10,mean:[6,7,12,18],measur:18,mechan:0,medium:18,meet:18,memori:[7,12],menu:18,merchant:18,mere:18,merg:[8,15,16,18,19],met:18,metaclass:[3,6],metaconnectorunit:[0,3,6],metadata:12,metamapp:6,method:[0,1,3,6,7,10,12,15,18],mignon:[15,17],misrepresent:18,miss:10,mkdir:16,mode:[13,18],model_nam:[0,3,4,7,10,11,15],modif:18,modifi:[0,6,12,15,16,18],modul:[0,3,7,8],modular:14,module_nam:8,monitor:14,more:[0,4,6,7,11,12,16,18,19],moreov:18,most:[0,11,16,18],mostli:12,msg00253:15,msg:7,much:15,multi:14,multicompani:15,multilin:7,multipl:[12,13],must:[7,10,13,18],myfield:6,myself:10,name:[0,3,4,6,7,8,10,12,15],name_of_the_modul:15,name_of_the_openerp_module_to_instal:3,namedtupl:6,natur:18,necessari:[7,10,12,18],need:[0,6,9,10,11,12,15,16,18],neither:18,net:15,network:[5,17,18],networkretryableerror:5,never:6,next:18,nicola:17,noconnectoruniterror:5,noexternalid:5,non:18,noncommerci:18,none:[0,3,4,6,7,8],nor:18,normal:[3,7,18],nosuchjoberror:5,note:[10,12],noth:[5,10,18],nothingtodojob:5,notic:[11,18],notifi:[7,18,19],notreadablejoberror:5,notwithstand:18,novemb:18,now:[3,7,12,14,15],number:[6,7,18],object:[0,3,4,6,7,8,11,18],oblig:18,observ:12,obtain:3,oca:[16,19],occasion:18,occur:[5,8,18,19],offer:18,offici:18,offset:8,often:10,old:11,older:18,on_chang:6,on_my_ev:4,on_record_cr:[4,11,12,15],on_record_unlink:[4,11],on_record_writ:[4,11,15],onc:[3,7],ondelet:[0,7,10,11],one2mani:7,one_th:7,onli:[0,4,6,7,8,12,14,18,19],only_cr:6,open2bizz:17,open:[7,14,15],open_related_act:7,openbig:17,openerp:[0,3,6,7,8,9,10,11,13,14,15],openerp_id:[0,3,10,11],openerpjobstorag:7,oper:[7,18],opportun:18,option:[0,6,7,10,13,15,18],order:[6,8,11,12,17,18],order_increment_id:11,org:[16,18],organ:18,origin:[8,18],orm:15,oscommerc:14,other:[0,3,6,7,11,14,18],otherwis:18,our:[10,18],out:[6,17,18],output:[6,18],output_field:6,output_valu:6,outsid:18,overrid:[8,15],overridden:[0,6,7],own:[0,1,7,10,12,14,18,19],packag:18,page:14,paid:11,pair:[0,7],paper:18,paragraph:18,paramet:[0,3,4,6,7,15],parent:[0,6,10,11,12],pars:19,part:[0,10,18],parti:18,particular:18,partner:[0,7,12,15,17],partner_id:7,pass:[7,15],password:[0,10,18],patch:16,patent:18,path:13,pattern:12,payment:18,peer:18,pend:[6,7],per:[3,10,12],perform:[7,18],perman:18,permiss:18,permit:18,perpetu:18,person:[16,18],pertin:18,peter:17,physic:18,pickl:7,pid:7,piec:[3,11,12,14,16,18],pipelin:6,piston:17,place:[0,15,18],plan:7,pleas:[7,10],pleasur:16,plu:18,plug:[3,10,12],pluggabl:12,poedit:16,point:[6,12],pointer:[12,18],pool:[0,3,7,8,11],poor:10,portion:18,possess:18,possibl:[0,6,7,11,15,18],post:[7,11],postgresql:19,postpon:7,pot:16,power:[14,18],practic:18,preambl:18,precis:18,predecessor:18,prefer:[8,18],prepar:6,present:18,preserv:18,prestashop:[0,10,14,16],prestashop_id:0,prestashoperpconnect:16,prevent:[10,18],previou:18,price:18,primarili:18,print:4,print_bar:4,prior:18,prioriti:[6,7,15],privat:18,probabl:[0,10,16],problem:[6,18],procedur:18,process:[7,12,13,15],procur:18,produc:18,product:[0,3,4,18],product_id:[6,7],program:18,programm:18,prohibit:18,project:10,promin:18,propag:[4,18],properli:7,properti:[0,15,18],propos:[10,12,14,16],protect:18,protocol:[12,18],prove:18,provid:[0,6,7,8,18],provis:18,provision:18,proxi:18,public_buildbot_buildout:16,publicli:18,publish:18,pull:[16,19],purpos:[3,18],pursuant:18,put:10,python:[0,7,10,13,16],pythonpath:13,qualifi:18,qualiti:18,quantiti:6,queue_class:7,queuejob:[7,12],queuework:[7,12],rais:17,rapidli:14,rather:[0,3,6,14],raw:[6,16],read:[1,5,7,8,12,16,18],readabl:18,readi:6,readili:18,real:[7,10,11],realli:6,reason:[3,10,16,18],rebuild:16,receipt:18,receiv:18,recipi:18,recogn:18,record:[0,1,3,4,6,7,8,9,10,11,12,15],record_id:[4,10,11],recordset:[3,7,8],redefin:0,redistribut:18,redmin:[0,14],refactor:15,refer:[7,12],referenc:7,refrain:18,regard:[10,18],regardless:18,regener:18,regist:[0,3,4,10,12],register_class:0,registri:[0,8,10,12],reinstat:18,rel:0,rel_id:6,relat:[0,6,7,11,12],related_act:7,related_action_partn:7,related_action_product:7,relationship:[6,18],releas:[15,18],relev:18,reli:18,relicens:18,remain:18,remot:18,remov:[4,7,12,15,18],renam:15,render:18,repair:18,repeat:16,replac:[0,4,6,8,12,15,19],report:16,repres:[0,7,18],request:[14,16],requeu:7,requeuejob:7,requir:[0,10,11,15,18],res_id:7,res_model:7,reserv:7,resolv:[5,18],respect:[6,11,15,16,18],respond:7,respons:[6,11,18],restor:8,restrain:15,restrict:[0,7,10,11,18],result:[7,16,18],retain:18,retri:[5,7],retriev:7,retryabl:7,retryablejoberror:5,reus:16,review:[10,12,18],revis:18,right:18,risk:18,roadmap:14,robust:14,rollback:8,rom:18,rove:17,royalti:18,rule:18,run:[7,9,11,12,13,15,18],run_job:7,runtimeerror:5,safest:18,sai:[0,12,18],sake:[0,10],sale:[6,11,12,18],sales_order_invoic:11,salesforc:14,same:[0,3,4,6,10,11,12,13,15,16,18],sane:16,satisfi:18,schedul:13,school:18,scope:[12,18],script:[13,15,18],search:[0,1,3,6,7,8,12,14,15],search_read:1,sebastien:17,second:[4,7],secondari:18,secondarili:18,section:[12,18],see:[6,7,10,11,12,14,16,18,19],seen:6,select:[0,7,10],selection_add:[0,7],self:[0,3,6,10,11,12,15],sell:18,semant:15,semiconductor:18,separ:[13,18],sequenti:7,serv:18,server:[7,13,18],servic:[0,12,14,17,18],session:[0,3,4,7],session_hdl:8,set:[7,11,14],set_don:7,set_enqueu:7,set_fail:7,set_lang:[3,15],set_pend:7,set_start:7,sever:[12,14],shall:18,share:[0,7,12,18],shop:17,shortcut:8,shorten:15,should:[0,3,4,6,7,10,12,13,15,16,18],show:11,side:[7,10],sight:7,sign:18,signal:[7,8,12,13],signific:18,similar:[7,18],simpl:0,simplifi:11,simultan:18,sinc:[0,7],singl:[0,7,18],size:[0,6,7],skip:6,skip_item:6,small:[6,12],smaller:7,smile:17,snip:0,so10:6,softwar:[14,17,18],sold:18,sole:18,solerp:14,solr:14,solut:[11,17,18],some:[0,1,6,9,10,11,12,18],somemapp:6,someth:[6,7,12,15],soon:[0,7,11],sort:7,sourc:[0,1,3,4,5,6,7,8,9,12,14,16,18],spare:18,sparingli:0,speak:[12,18],special:[1,7,10,18],specif:[0,7,11,18],specifi:[0,6,7,8,18],sphinx:16,sphinx_bootstrap_them:16,sphinxopt:16,spirit:18,spreadsheet:14,spree:14,standard:18,start:[7,8,11,14,15],start_openerp:16,start_servic:7,state:[3,6,7,18],statement:18,statu:[7,18],step:[10,11,16,18],still:7,stop:[7,16],storag:[5,7,18],store:[0,7,11,12,15],str:[3,4,6],straightforward:11,street:6,string:[0,3,7,10,11,15],structur:0,stuff:8,sub:[6,12],subclass:[0,1,3,12],subdivid:18,subject:18,sublicens:18,submap:[6,12],submit:16,subprogram:18,subscrib:[4,11,12,14],subsect:18,substanti:18,succeed:19,sue:18,suffic:18,suffix:3,sugarcrm:14,summaris:12,sunjka:17,supplement:18,suppli:17,support:[0,6,12,15,16,18],sure:18,surrend:18,surviv:18,sustain:18,sync_dat:[0,11],synchron:[0,3,7],synchronis:9,synchronizer1700:0,system:[0,1,11,12,18],tabl:7,tag:0,take:[0,4,6,7,10,13,18],taktik:17,tangibl:18,target:[6,7,11],target_field:6,task:[0,7,11],tax:0,tax_class_id:0,tax_includ:6,techniqu:11,technolog:18,tell:18,term:[12,18],termin:18,test:15,text:7,than:[0,3,6,7,10,13,15,18],thank:[14,15,17],the_thing_to_export:7,thei:[0,6,7,11,12,15,18],them:[0,3,6,7,10,12,13,17,18,19],themselv:0,therefor:18,thi:[0,3,4,6,7,8,10,12,14],thing:[0,10,11,18,19],third:[0,18],those:[7,12,18],though:18,thread:[7,13,15],three:18,through:[7,10,18],thu:[6,18],ticket:14,time:[0,5,6,7,18],timedelta:7,tini:17,tip:16,to_attr:6,to_backend:3,to_openerp:[3,15],togeth:12,too:10,tool:[3,18],top:3,total:10,traceback:7,tracker:14,trade:18,trademark:18,transact:[7,8,18],transfer:18,transform:[5,6,7,11,12],transientmodel:7,translat:[0,3,6,7,12],transmiss:18,transmit:7,treat:18,treati:18,trick:10,trigger:[6,12],tupl:[0,6],tutori:12,two:18,type:[3,6,7,9,10,11,14,16],typic:[0,6,18],uid:[3,8,11,12],under:[3,18],unicod:15,uninstal:10,uniqu:[0,5],unit:[1,3,6,9,12],unit_for:[3,12,15],unless:18,unlimit:[7,18],unlink:8,unmodifi:18,unnecessari:18,unpack:18,unregist:12,unsubscrib:[4,12],until:[16,18],unwrap:3,unwrap_bind:3,unwrap_model:3,updat:[1,4,6,8,15,16,18],upon:7,upstream:16,url:15,usabl:3,usag:[4,6,7,8],useless:13,user:[0,4,7,8,12,15,18],user_id:7,usernam:[0,10],usual:[0,7,11,12],utf:10,uuid:[7,15],val:[4,15],valid:[10,11,18],valu:[0,3,4,6,7,8,15],value_a:4,value_b:4,vari:10,verbatim:18,veri:7,vernichon:17,version:[0,3,10,11,12,14,15,18],vertic:0,via:0,view:[7,12,15,18],view_mod:7,view_typ:7,violat:18,visibl:18,volum:18,volumetri:14,vuillard:17,wai:[0,3,18],wait:7,waiv:18,waiver:18,want:[0,3,6,7,10,11],warehous:6,warehouse_id:6,warranti:18,watcher:7,watcher_:7,web:18,well:[0,12,18],were:[4,15,18],wget:16,what:[7,18],whatev:18,when:[0,3,4,6,7,8,10,11,12,13,15,18,19],where:[3,8,10,18],whether:[0,3,7,8,18],which:[0,3,4,6,7,8,10,11,12,15,16,18,19],who:18,whole:18,whom:18,whose:[3,18],wide:[12,18],widespread:18,willowit:17,window:18,wipo:18,wish:18,with_context:[8,15],with_inact:6,within:[8,18],without:18,won:[0,10,11],wordpress:14,work:[3,7,8,10,11,12,15,18],worker_for_db:7,worker_id:7,worker_lost:7,worker_timeout:7,worker_uuid:7,workerwatch:[7,12],worldwid:18,would:[0,6,13,18],wrap:3,write:[1,7,8,11,12,18],written:[12,18],www:18,xxx:16,year:[17,18],yield:6,you:[0,7,8,10,11,12,13,16,18],your:[0,7,10,12,14,18],yourself:18,zabbix:14},titles:["Backend","Backend Adapter","Binder","Connector","Event","Exceptions","Mapper","Queue","Session","Synchronizer","Boostrapping a connector","Code Overview","Connector Concepts","Use the connector with multiprocessing","Odoo Connector","Changes","Contribute","Contributors","License","Roadmap"],titleterms:{"abstract":10,"break":15,"class":10,"new":16,adapt:[1,12],api:14,backend:[0,1,10,11,12],base:14,bind:[10,11,12],binder:[2,12],boostrap:10,chang:15,checkpoint:[10,12],code:11,compat:15,concept:12,connector:[3,10,12,13,14,16],connectorunit:[10,11,12],contribut:16,contributor:[14,17],convent:16,core:14,creat:16,declar:10,develop:14,doc:16,environ:[10,12],event:[4,11,12],except:5,featur:14,financi:[14,17],framework:14,guid:14,indic:14,instal:10,job:[7,11,12],licens:18,maintain:16,manifest:10,map:12,mapper:6,model:[0,7,10],modul:10,multiprocess:13,name:16,odoo:[10,14],overview:[11,14],project:14,queue:[7,12],refer:14,roadmap:19,session:[8,11,12],start:16,synchron:[9,12],tabl:14,thi:16,top:14,translat:16,want:16,warn:15,worker:7}})