# HardHits workflow rule

## Stable vs dev
- Treat `c:\code\HardHits` as the **stable** copy.
- Treat `c:\code\HardHits-dev` as the **default development** copy.
- Unless the user explicitly says **`promote`**, make all code, UI, data-pipeline, and workflow changes in `HardHits-dev` first.

## Promotion gate
Only copy a change from `HardHits-dev` into `HardHits` when **all** of the following are true:
1. The user explicitly approves promotion by saying **`promote`**.
2. The change has been verified in `HardHits-dev` with the relevant run/build/test checks.
3. The promoted change is limited to the verified diff.

## Completion workflow
- After a HardHits task is verified and approved for promotion, treat **moving the verified change to live as the final step of completing the task**.
- Treat clear requests such as **`promote`**, **`push to live`**, or **`move everything to live as the final step`** as promotion approval for the verified diff.

## Expected assistant behavior
- If a requested edit would affect the stable repo, first prefer the matching file under `HardHits-dev`.
- If the current workspace is `HardHits`, avoid changing production files unless the user has clearly asked to promote verified changes.
- When reporting status, state whether the work was done in **dev** or **stable**.
