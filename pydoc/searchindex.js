Search.setIndex({envversion:49,filenames:["basicdetectioncallbackexample","basicfirstinstancecallbackexample","basicfirstrefexample","basicgetreputationexample","basicreputationchangecallbackexample","basicsetreputationexample","dxltieclient","dxltieclient.callbacks","dxltieclient.client","dxltieclient.constants","index","installation","overview","sampleconfig"],objects:{"":{dxltieclient:[6,0,0,"-"]},"dxltieclient.callbacks":{DetectionCallback:[7,1,1,""],FirstInstanceCallback:[7,1,1,""],ReputationChangeCallback:[7,1,1,""]},"dxltieclient.callbacks.DetectionCallback":{on_detection:[7,2,1,""],on_event:[7,2,1,""]},"dxltieclient.callbacks.FirstInstanceCallback":{on_event:[7,2,1,""],on_first_instance:[7,2,1,""]},"dxltieclient.callbacks.ReputationChangeCallback":{on_event:[7,2,1,""],on_reputation_change:[7,2,1,""]},"dxltieclient.client":{TieClient:[8,1,1,""]},"dxltieclient.client.TieClient":{add_certificate_reputation_change_callback:[8,2,1,""],add_file_detection_callback:[8,2,1,""],add_file_first_instance_callback:[8,2,1,""],add_file_reputation_change_callback:[8,2,1,""],get_certificate_first_references:[8,2,1,""],get_certificate_reputation:[8,2,1,""],get_file_first_references:[8,2,1,""],get_file_reputation:[8,2,1,""],remove_certificate_reputation_change_callback:[8,2,1,""],remove_file_detection_callback:[8,2,1,""],remove_file_first_instance_callback:[8,2,1,""],remove_file_reputation_change_callback:[8,2,1,""],response_timeout:[8,3,1,""],set_certificate_reputation:[8,2,1,""],set_file_reputation:[8,2,1,""]},"dxltieclient.constants":{AtdAttrib:[9,1,1,""],AtdTrustLevel:[9,1,1,""],CertEnterpriseAttrib:[9,1,1,""],CertGtiAttrib:[9,1,1,""],CertProvider:[9,1,1,""],CertRepChangeEventProp:[9,1,1,""],CertReputationOverriddenProp:[9,1,1,""],CertReputationProp:[9,1,1,""],DetectionEventProp:[9,1,1,""],EnterpriseAttrib:[9,1,1,""],EpochMixin:[9,1,1,""],FileEnterpriseAttrib:[9,1,1,""],FileGtiAttrib:[9,1,1,""],FileProvider:[9,1,1,""],FileRepChangeEventProp:[9,1,1,""],FileReputationProp:[9,1,1,""],FirstInstanceEventProp:[9,1,1,""],FirstRefProp:[9,1,1,""],GtiAttrib:[9,1,1,""],HashType:[9,1,1,""],RepChangeEventProp:[9,1,1,""],ReputationProp:[9,1,1,""],TrustLevel:[9,1,1,""]},"dxltieclient.constants.AtdAttrib":{AV_ENGINE_SCORE:[9,3,1,""],BEHAVIORS:[9,3,1,""],GAM_SCORE:[9,3,1,""],SANDBOX_SCORE:[9,3,1,""],VERDICT:[9,3,1,""]},"dxltieclient.constants.AtdTrustLevel":{KNOWN_MALICIOUS:[9,3,1,""],KNOWN_TRUSTED:[9,3,1,""],MIGHT_BE_MALICIOUS:[9,3,1,""],MIGHT_BE_TRUSTED:[9,3,1,""],MOST_LIKELY_MALICIOUS:[9,3,1,""],MOST_LIKELY_TRUSTED:[9,3,1,""],NOT_SET:[9,3,1,""],UNKNOWN:[9,3,1,""]},"dxltieclient.constants.CertEnterpriseAttrib":{FIRST_CONTACT:[9,3,1,""],HAS_FILE_OVERRIDES:[9,3,1,""],IS_PREVALENT:[9,3,1,""],PREVALENCE:[9,3,1,""]},"dxltieclient.constants.CertGtiAttrib":{FIRST_CONTACT:[9,3,1,""],PREVALENCE:[9,3,1,""],REVOKED:[9,3,1,""]},"dxltieclient.constants.CertProvider":{ENTERPRISE:[9,3,1,""],GTI:[9,3,1,""]},"dxltieclient.constants.CertRepChangeEventProp":{PUBLIC_KEY_SHA1:[9,3,1,""]},"dxltieclient.constants.CertReputationOverriddenProp":{FILES:[9,3,1,""],TRUNCATED:[9,3,1,""]},"dxltieclient.constants.CertReputationProp":{OVERRIDDEN:[9,3,1,""]},"dxltieclient.constants.DetectionEventProp":{DETECTION_TIME:[9,3,1,""],HASHES:[9,3,1,""],LOCAL_REPUTATION:[9,3,1,""],NAME:[9,3,1,""],REMEDIATION_ACTION:[9,3,1,""],SYSTEM_GUID:[9,3,1,""]},"dxltieclient.constants.EnterpriseAttrib":{SERVER_VERSION:[9,3,1,""],to_version_string:[9,4,1,""],to_version_tuple:[9,4,1,""]},"dxltieclient.constants.EpochMixin":{to_localtime:[9,4,1,""],to_localtime_string:[9,4,1,""]},"dxltieclient.constants.FileEnterpriseAttrib":{AVG_LOCAL_REP:[9,3,1,""],CHILD_FILE_REPS:[9,3,1,""],DETECTION_COUNT:[9,3,1,""],ENTERPRISE_SIZE:[9,3,1,""],FILE_NAME_COUNT:[9,3,1,""],FIRST_CONTACT:[9,3,1,""],IS_PREVALENT:[9,3,1,""],LAST_DETECTION_TIME:[9,3,1,""],MAX_LOCAL_REP:[9,3,1,""],MIN_LOCAL_REP:[9,3,1,""],PARENT_AVG_LOCAL_REP:[9,3,1,""],PARENT_FILE_REPS:[9,3,1,""],PARENT_MAX_LOCAL_REP:[9,3,1,""],PARENT_MIN_LOCAL_REP:[9,3,1,""],PREVALENCE:[9,3,1,""],to_aggregate_tuple:[9,4,1,""]},"dxltieclient.constants.FileGtiAttrib":{FIRST_CONTACT:[9,3,1,""],PREVALENCE:[9,3,1,""]},"dxltieclient.constants.FileProvider":{ATD:[9,3,1,""],ENTERPRISE:[9,3,1,""],GTI:[9,3,1,""],MWG:[9,3,1,""]},"dxltieclient.constants.FileRepChangeEventProp":{RELATIONSHIPS:[9,3,1,""]},"dxltieclient.constants.FirstInstanceEventProp":{HASHES:[9,3,1,""],NAME:[9,3,1,""],SYSTEM_GUID:[9,3,1,""]},"dxltieclient.constants.FirstRefProp":{DATE:[9,3,1,""],SYSTEM_GUID:[9,3,1,""]},"dxltieclient.constants.GtiAttrib":{ORIGINAL_RESPONSE:[9,3,1,""]},"dxltieclient.constants.HashType":{MD5:[9,3,1,""],SHA1:[9,3,1,""],SHA256:[9,3,1,""]},"dxltieclient.constants.RepChangeEventProp":{HASHES:[9,3,1,""],NEW_REPUTATIONS:[9,3,1,""],OLD_REPUTATIONS:[9,3,1,""],UPDATE_TIME:[9,3,1,""]},"dxltieclient.constants.ReputationProp":{ATTRIBUTES:[9,3,1,""],CREATE_DATE:[9,3,1,""],PROVIDER_ID:[9,3,1,""],TRUST_LEVEL:[9,3,1,""]},"dxltieclient.constants.TrustLevel":{KNOWN_MALICIOUS:[9,3,1,""],KNOWN_TRUSTED:[9,3,1,""],KNOWN_TRUSTED_INSTALLER:[9,3,1,""],MIGHT_BE_MALICIOUS:[9,3,1,""],MIGHT_BE_TRUSTED:[9,3,1,""],MOST_LIKELY_MALICIOUS:[9,3,1,""],MOST_LIKELY_TRUSTED:[9,3,1,""],NOT_SET:[9,3,1,""],UNKNOWN:[9,3,1,""]},dxltieclient:{callbacks:[7,0,0,"-"],client:[8,0,0,"-"],constants:[9,0,0,"-"],get_version:[6,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:function"},terms:{"000c29663178":[0,1,2,7,8],"000c2992f5d9":2,"11e6":[0,1,2,7,8],"142e1d688ef0568370c37187fd9f2351d7ddeda574f8bfa9b0fa4ef42db85aa2":[2,3,5,7,8],"190l":9,"1c26e2037c8e205b452cab3565d696512207d66d":8,"24397e4d":13,"275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f":3,"2d6ca45061b7972312e00e5933fdff95bb90b61b":[1,7],"31dbe8cc443d2ca7fd236ac00a52fb17":[1,7],"323a":2,"3395856ce81f2b7382dee72602f798b642f14140":3,"348e":[0,1,2,7,8],"3a6f574a":[2,8],"3b87a2d6f39770160364b79a152fcc73bae27adf":8,"3e6f":[2,8],"414bb16b10ece2db2d8448cb9f313f80cb77c310ca0c19ee03c73cba0c16fedb":[0,7],"435dfd470f727437c7cb4f07cba1f9a1f4272656":[0,7],"436d":[2,8],"44d88612fea8a8f36de82e1278abb02f":3,"4ae0":13,"4f2f":13,"5d73b77f":13,"645f":13,"68125cd6":[0,1,2,7,8],"6eae26db8c13182a7947982991b4321732cc3de2":8,"7eb0139d2175739b3ccb0d1110067820be6abd29":[2,3,5,7,8],"7eb0139d2175739b3ccb0d1110067820be6abd2b":4,"8c4b":13,"915e":2,"974f":13,"case":[0,1,4],"class":[0,1,3,4,7,8,9,12],"function":9,"int":8,"public":[7,8,9],"return":[2,6,8,9],"static":9,"true":[0,1,3,4,7],"while":[0,1,4,5,8],a5d8:[0,1,2,7,8],aa3c461d4c21a392e372d0d6ca4ceb1e4d88098d587659454eaf4d93c661880f:[1,7],about:[8,9],abov:[2,7],access:[8,12],accomplish:4,acd4:[2,8],across:[8,9],action:[0,2,4,7],active:[5,8],actual:0,add_certificate_reputation_change_callback:[4,7,8],add_file_detection_callback:[0,7,8],add_file_first_instance_callback:[1,7,8],add_file_reputation_change_callback:[4,7,8],addit:[7,8],advanc:[7,8,9],after:[0,1,4],again:4,agentguid:[0,1,7,8,9],aggreg:9,aggregate_attrib:9,aggregate_tupl:9,algorithm:9,all:9,allow:[8,12],almost:9,along:[2,3,5],also:[2,7,8],altern:11,amount:8,ani:11,anti:[3,9],api:[5,8],appear:[0,1,2,3,4],aspx:11,associ:[0,1,2,3,5,7,8,9],atd:[7,8,9],atdattrib:[7,8,9],atdtrustlevel:9,attribut:[3,4,7,8,9],attributes:[8,9],author:[5,8],automat:11,av_engine_score:9,avail:[0,1,2,3,4,5,8,9,11],averag:9,avg_local_rep:9,b437:13,b4c3b2d596d1461c1bb417b92dcd74817abb829d:8,backup:0,bad:3,base:[5,7,8,9],basic_detection_callback_exampl:0,basic_first_instance_callback:1,basic_first_ref_exampl:2,basic_get_reputation_exampl:3,basic_reputation_change_callback_exampl:4,basic_set_reputation_exampl:5,bcde336b054d:[2,8],been:[0,1,2,3,4,5,7,9],befor:9,behavior:9,behaviors:9,below:[0,1,2,3,4,5,7,8],benign:9,bit:9,both:4,bottom:[2,4],broadcast:4,broker:13,brokercert:13,brokercertchain:13,build:9,button:[2,4],calcul:[0,7],call:[2,3],can:[3,7,8,9],caus:7,cert:[8,13],certain:9,certenterpriseattrib:[7,8,9],certfil:13,certgtiattrib:[7,8,9],certif:[0,4,7,8,9,13],certprovid:[7,8,9],certrepchangeeventprop:[7,9],certreputationoverriddenprop:9,certreputationprop:9,child:9,child_file_reps:9,clean:0,click:[2,4],client:[0,1,2,3,4,5,6,7],close:2,code:[0,1,2,3,4,5],com:[11,13],comment:[5,8],commun:[2,3,5,8],complet:[0,1,2,3,4,5],concret:7,config:[0,1,2,3,4,5,7,13],configur:[0,1,2,3,4,5,10],connect:[0,1,2,3,4,5,7,12,13],consid:9,consider:9,consol:[0,1,4],constant:[3,6,7,8],construct:[0,1,4],constructor:8,contain:[7,8,9,13],convert:[3,9],copi:2,correspond:[3,7,8,9],count:9,cover:0,creat:[0,1,2,3,4,5,7,9],create_date:9,created:[3,4,7,8,9],creation:[7,8],crt:13,current:[0,9],d48d3d1a:2,data:12,date:[2,7,8,9],def:[0,1,4,7],defens:[7,8,9],defin:[0,1,4,9],demonstr:[0,1,2,3,4,5],depend:0,deriv:[0,1,4,7],descript:9,destination_top:[0,1,4],detection_callback:[0,7,8],detection_count:9,detection_dict:[0,7],detection_time:9,detectioncallback:[0,7,8,9],detectioneventprop:[7,9],detectiontim:[0,7,9],determin:[2,8,9,12],dict:[0,1,3,4,7,8,9],dictionari:[0,1,3,4,7,8,9],did:5,digest:9,directori:13,displai:[0,1,2,3,4,5],distinct:[4,7],distribut:13,document:8,dump:[0,1,3,4,7],dxl:[0,1,2,3,4,5,6,7,8],dxl_client:8,dxlclient:[0,1,2,3,4,5,7,13],dxltieclient:[0,1,2,3,4,5],each:[2,3,7,8,9],eb5e2b9dc51817a086d7b97eb52410ab:[0,7],eicar:3,encod:9,encount:[1,7,9],enforc:0,engin:9,ensure:0,ent_rep:[8,9],ent_rep_attrib:[8,9],enterpris:[1,4,5,7,8,9],enterprise:[8,9],enterprise_size:9,enterpriseattrib:9,entri:[3,7,8],epo:[2,4],epoch:[0,7,9],epoch_tim:9,epochmixin:9,equival:2,especi:5,establish:[0,1,2,3,4,5],etc:[7,8,9,12],evalu:9,event:[0,1,4,7,8,9,10],eventcallback:7,except:[5,8],exchang:[0,1,2,3,4,5,6,7,8],exe:[0,1,7],execut:0,exist:[5,9],extend:9,f2c7bb8acc97f92e987a2d4087d01221:4,f2c7bb8acc97f92e987a2d4087d021b1:[2,3,5,7,8],f98c55bdddf7:13,fabric:[0,1,2,3,4,5,7,11,12,13],featur:[8,12],febd12facfd4:13,file:0,file_md5:2,file_name_count:9,file_sha1:2,file_sha256:2,fileenterpriseattrib:[7,8,9],filegtiattrib:[7,8,9],filenam:[5,8],fileprovid:[3,7,8,9],filerepchangeeventprop:[7,9],filereputationprop:9,files:9,first:0,first_contact:9,first_instance_callback:[1,7,8],first_instance_dict:[1,7],firstinst:[1,7],firstinstancecallback:[1,7,8,9],firstinstanceeventprop:[7,9],firstrefprop:[2,8,9],focu:[8,12],focus_malware2:0,folder:11,follow:[0,1,2,3,4,5,7,8,9,13],forev:[0,1,4],format:[8,9,12],found:[1,3,7,8,9],from:[0,1,4,7,8,9],gam:9,gam_score:9,gatewai:9,get:2,get_certificate_first_refer:[8,9],get_certificate_reput:8,get_file_first_refer:[2,8,9],get_file_reput:[3,8],get_vers:6,github:[5,8,11],global:[3,7,8,9],good:3,group:[5,8],gti:[3,4,7,8,9],gtiattrib:9,guid:[2,9],guidelin:0,handl:[0,1,4,7],has_file_overrides:9,hash:[0,1,2,3,4,5,7,8,9],hashes:9,hashtyp:[2,3,5,7,8,9],hasn:9,have:[2,8,9,12],helper:9,hex:[7,8,9],high:[8,12],highest:9,how:8,howev:0,html:[5,8,11],http:[5,8,11],identifi:[2,3,4,5,7,8,9],includ:[0,1,2,7,9],include:9,increas:8,indent:[0,1,3,4,7],indic:[0,1,3,4,7,9],inform:[0,1,2,4,7,8,9,13],informat:[2,7],instal:[9,11],instanc:0,instead:7,instruct:[5,8],intellig:[0,1,2,3,4,5,6,7,8,9],invocat:10,invok:[2,3,5,7,8],invoke:7,is_prevalent:9,iter:2,json:[0,1,3,4,7],kei:[3,7,8,9,13],known:[3,4,5,8],known_malicious:9,known_trusted:[5,8,9],known_trusted_installer:9,last:9,last_detection_time:9,layer:12,least:8,left:[2,4],level:[3,5,7,8,9,12],lib:11,librari:[0,3,6],likelihood:8,line:[0,1,4],list:[2,3,4,7,8,9],listen:[0,1,4],local:[0,1,7,9],local_reputation:9,local_tim:9,local_time_str:9,localreput:[0,7,9],locat:[8,11,13],longer:8,lookup:[2,8],lower:[8,12],lowest:9,made:[2,3],mai:[0,7],major:[0,1,2,3,4,5,9],make:0,malici:9,malwar:9,manag:[0,8,12],mar:[5,8],marsendauth:[5,8],max_local_rep:9,maximum:[8,9],mcafe:[0,1,4,5,7,8,11,13],mcafee:[0,1,2,3,4,5,6,7,8,9],md5:[0,1,2,3,4,5,7,8,9],messag:[5,7,8,12],method:[0,1,2,3,4,5,7,8,9],might:0,might_be_malicious:9,might_be_trusted:9,min_local_rep:9,minimum:9,minor:9,mixin:9,modifi:2,moment:9,more:[8,9,13],morph:[1,7],most_likely_malicious:9,most_likely_trusted:9,must:[5,7,8,11,13],mwg:9,mybrok:13,mybroker2:13,mydetectioncallback:[0,7],myfirstinstancecallback:[1,7],myreputationchangecallback:[4,7],name:[0,1,7,8,9],navig:[2,4],new_reputations:9,newreput:[4,7,9],next:4,none:[8,11],not_set:9,note:[4,7],notepad:[3,5,8],nsystem:2,number:[8,9],numer:9,object:8,observ:9,occur:[0,4,7,9],old:[4,7],old_reputations:9,oldreput:[4,7,9],on_detect:[0,7],on_ev:7,on_first_inst:[1,7],on_reputation_chang:[4,7],once:[0,1,2,3,4,5],open:[2,4],opendxl:[3,5,8,11,13],oper:5,option:[5,8,9],order:[9,13],origin:7,original_ev:[0,1,4,7],original_response:9,other:8,outsid:0,overal:9,overrid:[0,1,4,7,9],overridden:[7,9],overview:10,page:[0,2,4,5,8,13],param:8,paramet:[7,8,9],parent:9,parent_avg_local_rep:9,parent_file_reps:9,parent_max_local_rep:9,parent_min_local_rep:9,pars:9,part:[5,8],particular:[0,1,3,4,5,7,8,9],pass:8,past:2,patch:9,perform:7,permiss:8,pip:11,place:[5,8],point:[0,1,4],polici:0,popul:13,preval:[8,9],prevalence:[8,9],previou:[4,7,9],previous:[1,5],print:[0,1,2,3,4,5,7],prior:2,privatekei:13,product:11,properli:0,properti:[7,8,9],prove:0,provid:[3,5,7,8,9,12],provider_id:9,providerid:[3,4,7,8,9],public_key_sha1:[8,9],publickeysha1:[7,9],purpos:[8,12],py2:11,pydoc:[5,8,11],python:[0,1,2,3,4,5,7,8,9],queri:3,query_limit:8,raw:9,receiv:[0,1,3,4,7,8],refactor:3,referenc:[2,8,9],regard:[7,9],regist:[0,1,4,7,8],relationship:9,relationships:9,remedi:[0,7,9],remediation_action:9,remediationact:[0,7,9],remov:4,remove_certificate_reputation_change_callback:8,remove_file_detection_callback:8,remove_file_first_instance_callback:8,remove_file_reputation_change_callback:8,rep_change_callback:[4,7,8],rep_change_dict:[4,7],repchang:4,repchangeeventprop:[7,9],report:9,repositori:5,represent:[7,8,9],reput:[0,2],reputationchangecallback:[4,7,8,9],reputationprop:[7,8,9],reputations_dict:[3,8,9],request:[3,9],requir:8,respons:[0,3,5,7,8,9],response_timeout:8,result:[2,3,8,9],retriev:[2,3,8],revok:9,revoked:9,safest:4,same:[2,3,4,5,8,13],sampl:[0,1,2,3,4,5],sandbox:9,sandbox_score:9,satisfi:11,scope:0,score:9,script:[0,1,2,3,4,5,11],sdk:[0,1,2,3,4,5,13],search:[2,4],second:[3,8],section:[4,7],secur:9,see:[0,1,2,3,4,5,7,8,9,13],seem:9,seen:[1,9],select:[0,2,4],self:[0,1,4,7],send:[5,8],sent:4,separ:[0,1,3,4,7],server:[5,7,8,9,11],server_version:9,servic:[0,1,2,3,4,5,8,10],set:[0,2,4],set_certificate_reput:8,set_file_reput:[5,8],sha1:[0,1,2,3,4,5,7,8,9],sha256:[0,1,2,3,5,7,8,9],sha:[2,7,8,9],should:[0,1,2,3,4,7],show:8,shown:[0,1,2,3,4,5,7,8],sign:9,similar:[0,1,2,3,4],simpl:2,simpli:4,simplifi:7,sleep:[0,1,4],sort_kei:[0,1,3,4,7],specif:[5,7,8,9,12],specifi:[8,9],standard:[3,7,8,9],step:[0,1,2,3,4,5,7,13],string:[7,9],structur:9,sub:13,subject:9,succe:5,succeed:5,suspici:9,swap:[5,8],system:[0,1,2,7,8,9],system_guid:[2,9],system_list:[2,8],tab:[2,4],take:9,test:[0,3],test_malware:7,them:2,thi:[0,1,2,3,4,5,7,8,9,12,13],those:13,threat:[0,1,2,3,4,5,6,7,8,9],threshold:0,tie:[0,1,2,3,4,5,6,7,8,9],tie_client:[0,1,2,3,4,5,7,8],tieclient:[0,1,2,3,4,5,7,8,9,12],time:[0,1,2,4,7,8,9],to_aggregate_tupl:9,to_localtim:9,to_localtime_str:[2,9],to_version_str:9,to_version_tupl:9,top:7,topic:[0,1,4,5,7,8,12],transform:7,trigger:[0,7,9],truncat:9,truncated:9,trust:[3,4,5,7,8,9],trust_level:[8,9],trustlevel:[3,4,5,7,8,9],tupl:9,two:3,type:[7,8,9],typic:[2,8],uniqu:9,unknown:9,unpack:11,unregist:8,updat:8,update_time:9,updatetim:[4,7,9],usag:7,usage:[7,8,9],use:[9,11],user:[8,12],util:9,valid:2,valu:[0,2,3,4,5,7,8,9],verdict:9,version:[6,9],version_attrib:9,version_str:9,version_tupl:9,via:[4,5,7,8,9],viru:[3,9],wai:2,wait:[0,1,4,8],want:2,web:9,were:9,what:2,when:[0,1,2,4,7],where:[2,8,9,12],whether:9,which:[0,1,2,3,4,5,7,8],whl:11,whose:[3,4,7,9],within:[0,1,2,4,7,9],without:[8,11,12],wrap:12,wrapper:[8,12],www:11,yet:9,you:2,your:0,zip:11},titles:["Basic Detection Callback Example","Basic First Instance Callback Example","Basic First References Example","Basic Get Reputation Example","Basic Reputation Change Callback Example","Basic Set Reputation Example","dxltieclient package","dxltieclient.callbacks module","dxltieclient.client module","dxltieclient.constants module","McAfee Threat Intelligence Exchange (TIE) DXL Client Library Documentation","Library Installation","Overview","Samples Configuration"],titleterms:{"new":1,api:10,basic:[0,1,2,3,4,5],callback:[0,1,4,7],chang:4,client:[8,10],configur:13,constant:9,content:6,detail:[0,1,2,3,4,5],detect:[0,1],document:10,dxl:10,dxltieclient:[6,7,8,9],exampl:[0,1,2,3,4,5],exchang:10,execut:1,file:1,first:[1,2],forc:[0,4],get:3,installat:[10,11],instanc:1,intellig:10,introduct:10,librari:[10,11],mcafee:10,modul:[6,7,8,9],output:[0,1,4],overview:12,packag:6,prerequisit:[0,1,2,3,4,5,11],python:10,refer:2,reput:[3,4,5],run:[0,1,2,3,4,5],sampl:[10,13],set:5,setup:2,submodul:6,threat:10,tie:10}})