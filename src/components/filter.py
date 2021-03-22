a=["against_the_grain","BNE14T30","century_eater","copperhead","Fx77","glider_to_block","helix","highway_robber","L112","L156","Lx200","mathematician","MWSS_out_of_the_blue","one-sided_spaceship_synthesis","p8_bouncer","parasite","partial_result","PF35W_(1)","Rx202","signal_elbow","toggle_circuit","trombone_slide","x66"]
import json
with open('pattern.json','r') as f:
    patterns = json.load(f)
for i in a: patterns.pop(i)
with open('patte.json',"w") as f:
    json.dump(patterns,f)